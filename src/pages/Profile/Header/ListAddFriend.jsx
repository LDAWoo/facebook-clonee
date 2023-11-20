import { PlusOutlined } from "@ant-design/icons";
import { ArrowIconLeft, ArrowIconRight } from "../../../components/icons/icons";
import { useContext, useRef, useState } from "react";
import ButtonAddFriend from "../../../components/Button/ButtonFriend/ButtonAllFriend";
import { GetFriendContext } from "../../../components/Contexts/AppFriendProvider";

function ListAddFriend({ uid }) {
  const [isArrowLeftVisible, setIsArrowLeftVisible] = useState(false);
  const { filterAllFriends, listAddFriends, handleAddFriend, handleCancelAddFriendRequest } = useContext(GetFriendContext);

  const scrollRef = useRef();

  const handleAddFriendClick = (uid) => {
    handleAddFriend(uid);
  };

  const handleCancelAddFriendRequestClick = (uid) => {
    handleCancelAddFriendRequest(uid);
  };

  const handleClickLeft = () => {
    const container = scrollRef.current;
    const scrollStep = container.clientWidth;
    container.scrollLeft -= scrollStep;
    if (container.scrollLeft <= scrollStep) {
      setIsArrowLeftVisible(false);
    }
  };

  const handleClickRight = () => {
    setIsArrowLeftVisible(true);
    const container = scrollRef.current;
    const scrollStep = container.clientWidth;
    container.scrollLeft += scrollStep;
  };

  return (
    <div className="relative">
      <div ref={scrollRef} className="flex overflow-hidden scroll-smooth">
        {filterAllFriends
          .filter((friend) => friend.uid !== uid)
          .map((friend, index) => {
            const isFriendAdded = listAddFriends[0]?.friends?.includes(friend.uid);
            return <ButtonAddFriend key={index} uid={friend.uid} name={friend.displayName} src={friend.photoURL} suggestedFriends={friend} isAdd={isFriendAdded} onClick={() => handleAddFriendClick(friend.uid)} onClickCancel={() => handleCancelAddFriendRequestClick(friend.uid)} />;
          })}
      </div>
      {isArrowLeftVisible && (
        <div className="absolute top-1/3 left-3 z-1">
          <div
            className="flex items-center justify-center rounded-full cursor-pointer bg-gray-50 w-12 h-12
                hover:bg-gray-200"
            onClick={handleClickLeft}
          >
            <ArrowIconLeft />
          </div>
        </div>
      )}

      <div className="absolute top-1/3 right-3 z-1">
        <div
          className="flex items-center justify-center rounded-full cursor-pointer bg-gray-50 w-12 h-12
                hover:bg-gray-200"
          onClick={handleClickRight}
        >
          <ArrowIconRight />
        </div>
      </div>
    </div>
  );
}

export default ListAddFriend;
