import { NavLink } from "react-router-dom";
import routesConfig from "../../../configs/config";
import Tippy from "@tippyjs/react";
import ButtonConfirm from "./ButtonConfirm";
import { useContext } from "react";
import { GetFriendContext } from "../../Contexts/AppFriendProvider";
import FriendPreview from "../../../pages/Friend/FriendHome/FriendPreview";
import { Avatar } from "antd";
import { defaultImage } from "../../Images/DefaultImage";
import TippyHeadlessCustom from "../../TippyHeadless/TippyHeadlessCustom";


function CardFriendRequest({ uid, src, name, suggestedFriends }) {
  const { handleReplyFriend } = useContext(GetFriendContext);

  console.log(name)

  const handleConfirmAddFriend = (uid) => {
    handleReplyFriend(uid);
  };

  return (
    <div className="flex flex-1 basis-0 box-border p-1 max-w-[250px] min-w-[200px] ">
      <div className="w-full">
        <div className="w-full">
          <div className="w-full rounded-lg bg-white dark:bg-primary-600 overflow-x-hidden overflow-y-hidden border dark:border-gray-700 box-border z-0 shadow-md">
            <div className="w-full">
              <NavLink
                to={routesConfig.profile + uid}
                className="cursor-pointer bg-transparent touch-manipulation"
              >
                <img
                  src={defaultImage}
                  alt={name}
                 className="w-full h-full"
                />
              </NavLink>
            </div>

            <div className="flex-col p-2 rounded-bl-md rounded-br-md shadow-md">
              <TippyHeadlessCustom render={<FriendPreview data={suggestedFriends}/>}>
                    <NavLink to={routesConfig.profile+uid}>
                      <div className="font-medium hover:underline">{name}</div>
                    </NavLink>
              </TippyHeadlessCustom>
        
                  <div className="flex space-x-1 items-center">
                    <Avatar.Group maxCount={2} size={20} className="cursor-pointer">
                      <NavLink to={routesConfig.profile/`${123}`}>
                        <Tippy>
                          <Avatar src={defaultImage} />
                        </Tippy>
                      </NavLink>
                    </Avatar.Group>
                    <div className="text-gray-600 mt-1">3 bạn chung</div>
                  </div>

              <div className="flex flex-col space-y-1">
                <ButtonConfirm
                  title="Xác nhận"
                  typeButton="Confirm"
                  colorText="text-white"
                  onClick={() => handleConfirmAddFriend(uid)}
                />
                <ButtonConfirm
                  
                  colorText="text-black"
                  typeButton="Delete"
                  title="Xóa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFriendRequest;
