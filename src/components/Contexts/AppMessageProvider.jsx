import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AppContext } from "./AppProvider";
import useFirebaseStore from "../../hooks/useFirebaseStore";
import { database } from "../firebase/firebaseConfig";
import PropTypes from 'prop-types'
import { GetFriendContext } from "./AppFriendProvider";
import { addDocument } from "../firebase/services";

export const MessageContext = createContext();

function AppMessageProvider({children}) {
    const {user} = useContext(AppContext);
    const uid = user[0]?.uid;

    const [isTippyVisible, setIsTippyVisible] = useState({
      menu: false,
      message: false,
      notification: false,
      account: false
    });
    const {allFriends} = useContext(GetFriendContext);
    const [value,setValue] = useState('');
    const [isMinimizeMessage, setIsMinimizeMessage] = useState(false);
    const [heightBodyMessage, setHeightBodyMessage] = useState({});
    const [dataBodyMessage, setDataBodyMessage] = useState({})
    const [message, setMessage] = useState({})
    const [dataModalsMessage,setDataModalsMessage] = useState(null)
    const [selectedConversationId, setSelectedConversationId] = useState(null)
    const conditionAllFriends ={
      fieldName: 'uid',
      operator: '!=',
      compareValue: uid
  }

    const condition = {
        fieldName: 'members',
        operator: 'array-contains',
        compareValue: uid    
    }

    const conditionMessage ={
      fieldName: 'uid',
      operator: '==',
      compareValue: uid 
    }
    
    const allConversations = useFirebaseStore('conversations', condition,'createdAt');
    const messages = useFirebaseStore('messages', conditionMessage, 'createdAt');
    
    useEffect(() =>{
      let collectionRef = query(collection(database,'messages'),orderBy('createdAt','asc'));
      const unsubscribe = onSnapshot(collectionRef, (snapshot) =>{
        setMessage(snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })))
      })
      return () => unsubscribe();
    },[allConversations,messages])

    const handleAddMessage = (conversationId) => {
      addDocument("messages", {
            Icons: [],
            Image: "",
            content: "",
            conversationsId: conversationId,
            uid,
      });
    }

    const filteredConversation = allFriends.map(friend => {
      const messages = allConversations.map(conversation => {
        const matchedMessages = message.filter(msg => {
          const isMatched = conversation.members.some(member => member === friend.uid);
          return isMatched && msg.conversationsId === conversation.id;
        })    
        return matchedMessages;
      });
      return {
        ...friend,
        messages: messages.flat(),
      };
    });
    
    const filteredConversationWithConversationsId = filteredConversation.map((friend) => {
      const conversationsIds = friend.messages.map((msg) => msg.conversationsId);
      return {
        ...friend,
        conversationsId: conversationsIds.length > 0 ? conversationsIds[0] : null,
      };
    });

   
    let conversationFilteredAllFriends = filteredConversationWithConversationsId.filter(friend => {
      return allConversations.some(conversation => conversation.members.includes(friend.uid));
    });
    
    const sortedConversationFilteredAllFriends = useMemo(() => {
      return conversationFilteredAllFriends
        .concat()
        .sort((a, b) => {
          const timeA = a.createdAt?.seconds || 0;
          const timeB = b.createdAt?.seconds || 0;
          return timeA - timeB;
        });
    }, [conversationFilteredAllFriends]);

    useEffect(() =>{
      const minuteInterval = setInterval(() => {
        sortedConversationFilteredAllFriends
          .sort((a, b) => {
            const timeA = a.createdAt?.seconds || 0;
            const timeB = b.createdAt?.seconds || 0;
            return timeA - timeB;
          })
        
      },6000)
      return () => clearInterval(minuteInterval)
      
    },[sortedConversationFilteredAllFriends,messages])
      

    return (
        <MessageContext.Provider
        value={{value,setValue,isTippyVisible, setIsTippyVisible,isMinimizeMessage, setIsMinimizeMessage,heightBodyMessage, setHeightBodyMessage,allConversations, conversationFilteredAllFriends,dataBodyMessage, setDataBodyMessage,sortedConversationFilteredAllFriends,dataModalsMessage,setDataModalsMessage,selectedConversationId, setSelectedConversationId,handleAddMessage}}
        >
            {children}
        </MessageContext.Provider>
      );
}

AppMessageProvider.propTypes = {
  children: PropTypes.elementType
}

export default AppMessageProvider;