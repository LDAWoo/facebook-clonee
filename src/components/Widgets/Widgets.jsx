import { AiOutlineSearch } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import { Avatar } from "antd";
import { GetFriendContext } from "../Contexts/AppFriendProvider";
import { MessageContext } from "../Contexts/AppMessageProvider";
import { useContext } from "react";
import ButtonRoundedFull from "../Button/ButtonRounded/ButtonRoundedFull";
import { addDocs } from "../firebase/services";
import { AppContext } from "../Contexts/AppProvider";

function Widgets() {
  const { user } = useContext(AppContext);
  const uid = user[0]?.uid;

  const { filterListFriends } = useContext(GetFriendContext);
  const { setDataModalsMessage, allConversations,handleAddMessage } = useContext(MessageContext);

  const existingConversation = (friendUID) => {
    return allConversations.filter((conversation) => {
      return (
        conversation.members.includes(uid) &&
        conversation.members.includes(friendUID)
      );
    });
  };

  const handleClickMessage = async (friendUID) => {
    let conversationId;

    const dataConversation = [uid, friendUID];
    const existingConversations = existingConversation(friendUID);

    if (existingConversations.length <= 0) {
      const newConversationRef = await addDocs("conversations", {
        members: dataConversation,
      });
      conversationId = newConversationRef.id;
      handleAddMessage(conversationId)

    } else {
      conversationId = existingConversations[0].id;
    }
   
    setDataModalsMessage((prevModalsArray) => {
      const existingIds = Array.isArray(prevModalsArray) ? prevModalsArray : [];
      const idExits = existingIds.includes(conversationId);
      const filteredIds = idExits
        ? existingIds.filter((existingId) => existingId !== conversationId)
        : existingIds;
      return [...filteredIds, conversationId];
    });
  };

  return (
    <div className="hidden min-md:flex flex-col mt-5 pb-44">
      <div className="flex justify-between items-center dark:text-primary-200 mb-5 font-medium">
        <h2 className="text-lg">Người liên hệ</h2>
        <div className="flex space-x-2">
          <ButtonRoundedFull
            isTippy={false}
            size={32}
            Icon={<AiOutlineSearch size={18} />}
          />
          <ButtonRoundedFull
            isTippy={false}
            size={32}
            Icon={<SlOptions size={18} />}
          />
        </div>
      </div>

      {filterListFriends.map((friend, index) => (
        <div
          key={index}
          //to={routesConfig.messages.replace(':uid', friend.uid)}
        >
          <div
            className="flex items-center cursor-pointer
                        p-2 hover:bg-gray-200 hover:dark:bg-primary-500 rounded-md space-x-2 font-medium
                        "
            key={friend.uid}
            onClick={() => handleClickMessage(friend.uid)}
          >
            <Avatar size={28} src={friend.photoURL} />
            <p className="dark:text-primary-50">{friend.displayName}</p>
          </div>
        </div>
      ))}

      <div className="border-t-[1px] mt-3 dark:border-gray-700">
        <p className="text-gray-500 font-medium mt-3 dark:text-primary-200">
          Cuộc trò chuyện nhóm
        </p>
      </div>
    </div>
  );
}

export default Widgets;
