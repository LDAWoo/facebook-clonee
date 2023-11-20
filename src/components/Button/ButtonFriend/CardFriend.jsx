import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routesConfig from "../../../configs/config";
import Tippy from "@tippyjs/react";
import ButtonConfirm from "./ButtonConfirm";
import TippyHeadlessCustom from "../../TippyHeadless/TippyHeadlessCustom";
import { Avatar } from "antd";
import FriendPreview from "../../../pages/Friend/FriendHome/FriendPreview";

import { defaultImage } from "../../Images/DefaultImage";
import { useContext } from "react";
import { GetFriendContext } from "../../Contexts/AppFriendProvider";

function CardFriend({
  uid,
  src,
  name,
  suggestedFriends,
  onClick,
  onClickCancel,
  isAdd,
  typeCard,
  typeReview
}) {
  const { handleReplyFriend } = useContext(GetFriendContext);

  const handleConfirmAddFriend = (uid) => {
    handleReplyFriend(uid);
  };

  return (
    <div className="flex flex-1 basis-0 box-border p-1 max-w-[250px] min-w-[200px] ">
      <div className="w-full">
        <div className=" w-full ">
          <div className="w-full rounded-lg bg-white dark:bg-primary-600 overflow-x-hidden overflow-y-hidden border dark:border-gray-700 box-border z-0 shadow-md">
            <div className="w-full ">
              <NavLink
                to={routesConfig.profile.replace(":uid", uid)}
                className="cursor-pointer bg-transparent touch-manipulation"
              >
                <img
                  src={src}
                  alt={name}
                  className="w-full h-full object-cover "
                />
              </NavLink>
            </div>

            <div className="flex-col p-2 shadow-md space-y-1">
              <TippyHeadlessCustom
                width={380}
                render={<FriendPreview data={suggestedFriends} isAdd={isAdd} typeReview={typeReview}/>}
              >
                <NavLink to={routesConfig.profile.replace(":uid", uid)}>
                  <div className="font-medium hover:underline dark:text-primary-50">
                    {name}
                  </div>
                </NavLink>
              </TippyHeadlessCustom>

              <div className="flex space-x-1 items-center">
                <Avatar.Group maxCount={2} size={18} className="cursor-pointe">
                  <NavLink to={`/routesConfig.profile/${123}`}>
                    <Tippy>
                      <Avatar src={defaultImage} className="border-none"/>
                    </Tippy>
                  </NavLink>
                  <NavLink to={`/routesConfig.profile/${123}`}>
                    <Tippy>
                      <Avatar src={defaultImage} className="border-none"/>
                    </Tippy>
                  </NavLink>
                </Avatar.Group>
                <div className="text-gray-600 mt-1 dark:text-primary-200">
                  3 bạn chung
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                {typeCard == "Request" && (
                  <>
                    <ButtonConfirm
                      title="Xác nhận"
                      fontText="font-medium"
                      typeButton="Confirm"
                      colorText="text-primary-50"
                      onClick={() => handleConfirmAddFriend(uid)}
                    />
                    <ButtonConfirm
                      fontText="font-medium"
                      colorText="text-gray-900 dark:text-primary-50"
                      typeButton="Delete"
                      title="Xóa"
                    />
                  </>
                )}

                {typeCard == "Add" && (
                  <>
                    <ButtonConfirm
                      fontText="font-medium"
                      colorText="text-fb-primary dark:text-fb-primary"
                      title="Thêm bạn bè"
                      typeButton="Add"
                      onClick={onClick}
                      isVisibility={isAdd}
                    />
                    {isAdd ? (
                      <ButtonConfirm
                        fontText="font-medium"
                        colorText="text-gray-900 dark:text-primary-50"
                        typeButton="Delete"
                        onClick={onClickCancel}
                        title="Hủy"
                      />
                    ) : (
                      <ButtonConfirm
                        fontText="font-medium"
                        colorText="text-gray-900 dark:text-primary-50"
                        typeButton="Delete"
                        title="Xóa, gỡ"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardFriend.propTypes = {
  uid: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  suggestedFriends: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func.isRequired,
  isAdd: PropTypes.bool.isRequired,
  typeCard: PropTypes.string.isRequired,
  typeReview: PropTypes.string.isRequired,
};

export default CardFriend;
