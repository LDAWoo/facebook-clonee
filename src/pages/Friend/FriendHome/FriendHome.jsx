import { NavLink } from "react-router-dom";
import routesConfig from "../../../configs/config";
import { useContext, useEffect, useState } from "react";
import CardFriend from "../../../components/Button/ButtonFriend/CardFriend";

import { GetFriendContext } from "../../../components/Contexts/AppFriendProvider";
import { checkImageURL } from "../../../components/Contexts/AppProvider";
import { defaultImage } from "../../../components/Images/DefaultImage";

function FriendHome() {
  const {
    listAddFriends,
    filterFriendRequestList,
    filterAllFriends,
    handleAddFriend,
    handleCancelAddFriendRequest,
  } = useContext(GetFriendContext);

  const [allFriends, setAllFriends] = useState();
  const handleAddFriendClick = (uid) => {
    handleAddFriend(uid);
  };

  const handleCancelAddFriendRequestClick = (uid) => {
    handleCancelAddFriendRequest(uid);
  };

  useEffect(() => {
    const ImageLoadURLs = async () => {
      const updatedFilterAllFriends = await Promise.all(
        filterAllFriends.map(async (friend) => {
          const isFriendAdded = listAddFriends[0]?.friends?.includes(
            friend.uid
          );
          let photoURL = await checkImageURL(friend?.photoURL, defaultImage);
          return {
            ...friend,
            photoURL,
            isFriendAdded,
          };
        })
      );
      setAllFriends(updatedFilterAllFriends);
    };
    ImageLoadURLs();
  }, [listAddFriends, filterAllFriends]);

  return (
    <div className="block w-full flex-brow">
      <div className="flex justify-between pt-4 pb-4">
        <div className="font-bold text-xl">Lời mời kết bạn</div>
        <NavLink to={routesConfig.friendsRequests}>
          <div className="rounded-sm text-blue-600 p-2 hover:bg-gray-300 hover:dark:bg-primary-600">
            Xem tất cả
          </div>
        </NavLink>
      </div>

      {filterFriendRequestList.length <= 0 ? (
        <div className="flex flex-col w-full items-center justify-center mb-5">
          <div className="">
            <img
              src="https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg"
              alt=""
              width={112}
              height={112}
            />
          </div>
          <div>
            <div className="font-bold text-xl text-gray-600 dark:text-primary-100">
              Bạn không có lời mời kết bạn nào.
            </div>
          </div>
        </div>
      ) : (
        <div className="pb-4">
          <div className="flex flex-wrap">
            {filterFriendRequestList?.map((request, index) => {
              return (
                <CardFriend
                  key={index}
                  uid={request?.uid}
                  name={request?.displayName}
                  src={request?.photoURL}
                  suggestedFriends={request}
                  typeCard="Request"
                  typeReview="Request"
                />
              );
            })}
          </div>
        </div>
      )}

      <div className="w-full border-t-[1px] border-gray-300 dark:border-gray-700" />

      <div className="flex justify-between pt-4 pb-1">
        <div className="font-bold text-xl dark:text-primary-50">Những người bạn có thể biết</div>
        <NavLink to={routesConfig.friendsSuggestions}>
          <div className="rounded-sm text-blue-600 p-2 hover:bg-gray-300 hover:dark:bg-primary-600">
            Xem tất cả
          </div>
        </NavLink>
      </div>

      <div className="pb-4">
        <div className="flex flex-wrap">
          {allFriends?.map((friend, index) => {
            const isFriendAdded = listAddFriends[0]?.friends?.includes(
              friend.uid
            );
            return (
              <CardFriend
                key={index}
                uid={friend?.uid}
                name={friend?.displayName}
                src={friend?.photoURL}
                suggestedFriends={friend}
                typeCard="Add"
                typeReview="Add"
                isAdd={isFriendAdded}
                onClick={() => handleAddFriendClick(friend.uid)}
                onClickCancel={() =>
                  handleCancelAddFriendRequestClick(friend.uid)
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FriendHome;
