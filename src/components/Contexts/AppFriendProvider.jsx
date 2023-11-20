    import { createContext, useContext } from "react";
    import { AppContext } from "../../components/Contexts/AppProvider";

    import useFirebaseStore from '../../hooks/useFirebaseStore'
    import PropTypes from 'prop-types'
   
    import { arrayUnion, collection, doc, getDoc, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";

    import { addDocument } from "../firebase/services";
    import { database } from "../firebase/firebaseConfig";


    export const GetFriendContext = createContext();

    function AppFriendProvider({children}) {
        const {user} = useContext(AppContext);
        let uid = user[0]?.uid
        console.log("begin provider")
        
        const conditionFriends ={
            fieldName: 'uid',
            operator: '==',
            compareValue: uid
        }

        const conditionFriendsDiff ={
            fieldName: 'uid',
            operator: '!=',
            compareValue: uid
        }

        const conditionAllFriends ={
            fieldName: 'uid',
            operator: '!=',
            compareValue: uid
        }

        const conditionFriendsRequest ={
            fieldName: 'uid',
            operator: '==',
            compareValue: uid
        }

        const conditionAddFriends ={
            fieldName: 'uid',
            operator: '==',
            compareValue: uid
        }

        const conditionAddFriendsDiff ={
            fieldName: 'uid',
            operator: '!=',
            compareValue: uid
        }

        const conditionRequest ={
            fieldName: 'uid',
            operator: '!=',
            compareValue: uid
        }

        const request = useFirebaseStore('friendsRequestList', conditionRequest,'uid');

        const addFriendDifferentUid = useFirebaseStore('friendsAddList', conditionAddFriendsDiff,'uid');

        const friends = useFirebaseStore('friendsList',conditionFriends,'uid')

        const friendsDifferent = useFirebaseStore('friendsList',conditionFriendsDiff,'uid')

        const allFriends = useFirebaseStore('users', conditionAllFriends,'uid');
        
        const friendsRequest = useFirebaseStore('friendsRequestList', conditionFriendsRequest,'uid');

        const listAddFriends = useFirebaseStore('friendsAddList',conditionAddFriends,'uid');
        
        const filterFriendRequestList = allFriends?.filter(friendRequest => friendsRequest[0]?.friendsRequest?.includes(friendRequest.uid));

        const filterAllFriends = allFriends?.filter(friendRequest => !friendsRequest[0]?.friendsRequest?.includes(friendRequest.uid))?.filter(friendAdd => !friends[0]?.listFriends?.includes(friendAdd.uid));
        
        const filterListFriends = allFriends?.filter(friend => friends[0]?.listFriends?.includes(friend.uid));

        const updatedFilterAllFriends = filterAllFriends.map((friend) => ({
           ...friend,
           mutual: friends
        }));

        // filterAllFriends.map((friend,i) => {
        //     friends[0]?.listFriends?.map((myFriend,index) => {
        //       if (friend.uid !== myFriend) {
                
        //       }
        //     });
        //   });
          
          

        const handleAddFriend = async(friendUid) =>{
            if(listAddFriends.length <= 0){
                const data = {
                    uid: uid,
                    friends: [
                        friendUid
                    ],
                }
                addDocument('friendsAddList',data)
                
            }else{
                const friendsAddId = listAddFriends[0]?.id;
                const friendAddRef = await doc(database,'friendsAddList',friendsAddId);
                updateDoc(friendAddRef,{
                    friends: arrayUnion(friendUid)
                })
            }

            const newRequest = request.filter((req) => friendUid.includes(req.uid))

            if(newRequest.length<=0){
                const data = {
                    uid: friendUid,
                    friendsRequest: [
                        uid
                    ]
                }
                addDocument('friendsRequestList',data);
            
            }else{
                const friendsRequestId = newRequest[0]?.id;
                const friendRequestRef = await doc(database, 'friendsRequestList',friendsRequestId);
                updateDoc(friendRequestRef,{
                    friendsRequest: arrayUnion(uid)
                })
            }
        }

        const handleCancelAddFriendRequest = async(UID) =>{
            const friendsRequestId = listAddFriends[0].id;
            const friendRequestRef = doc(database,'friendsAddList',friendsRequestId);

            const docSnapshot = await getDoc(friendRequestRef);
            const data = docSnapshot.data();
            
            const updatedFriends = data?.friends?.filter((friendUid) => friendUid !== UID);

            updateDoc(friendRequestRef,{
                friends: updatedFriends
            })

            const newRequest = request.filter((req) => UID.includes(req.uid))
            const requestId = newRequest[0]?.id;
            const requestRef = doc(database, 'friendsRequestList',requestId);  
            const docRequest = await getDoc(requestRef);
            const dataRequest = docRequest.data();

            const updateNewRequest = dataRequest?.friendsRequest?.filter((req) => !uid.includes(req))
            
            updateDoc(requestRef,{
                friendsRequest: updateNewRequest
            })
        }

        const handleReplyFriend = async(UID) =>{
        if(friends.length<=0){
                const data = {
                    uid: uid,
                    listFriends: [
                        UID
                    ]
                }
                addDocument('friendsList',data)
        }else{
            const friendsId = friends[0]?.id;
            const friendsRef = doc(database,'friendsList',friendsId);
            updateDoc(friendsRef,{
                    listFriends: arrayUnion(UID)
            })
            }

            const conditionUidAdd = {
                fieldName: 'uid',
                operator: '==',
                compareValue: UID
            }

            let collectionRef = query(collection(database,'friendsList'),orderBy('uid'));
            collectionRef = query(collectionRef,where(conditionUidAdd.fieldName,conditionUidAdd.operator,conditionUidAdd.compareValue));


            onSnapshot(collectionRef, (snapshot) =>{
                const dataDoc = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                if(dataDoc.length<=0){
                    const data = {
                        uid: UID,
                        listFriends: [
                            uid
                        ]
                    }
                    addDocument('friendsList',data);
                }else{
                    const addFriendsId = dataDoc[0]?.id;
                    const addFriendsRef = doc(database,'friendsList',addFriendsId);
                    updateDoc(addFriendsRef,{
                        listFriends: arrayUnion(uid)
                })
                }

            }) 


            {/* Uơdata Friends Request List */}
            const friendsRequestId = friendsRequest[0]?.id;
            const updateFriendsRequest  = friendsRequest.flatMap(req => req.friendsRequest.filter(uid => uid !== UID))
            const friendsRequestRef = doc(database, 'friendsRequestList',friendsRequestId);

            updateDoc(friendsRequestRef,{
                friendsRequest: updateFriendsRequest
            })

            {/* Uơdata Add Friends */}
            const friendsAddId = addFriendDifferentUid[0].id;
            const updateFriendAdd = addFriendDifferentUid.flatMap(add => add.friends.filter(uid => uid === UID))
            const friendsAddRef = doc(database, 'friendsAddList',friendsAddId);

            updateDoc(friendsAddRef,{
                    friends: updateFriendAdd
            })
        }
        console.log("end provider >>>>>>>>>>>")

        return ( 
            <GetFriendContext.Provider
            value={{
                friends,
                allFriends,
                friendsRequest,
                listAddFriends,
                filterFriendRequestList,
                filterAllFriends,
                request,
                addFriendDifferentUid,
                filterListFriends,
                handleAddFriend,
                handleCancelAddFriendRequest,
                handleReplyFriend,
            }}
            >
                {children}
            </GetFriendContext.Provider>
        );
    }


    AppFriendProvider.propTypes ={
        children: PropTypes.elementType
    }

    export default AppFriendProvider;