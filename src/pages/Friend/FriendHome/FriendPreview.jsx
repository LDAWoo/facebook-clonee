import {
  FaUserCheck,
  FaUserFriends,
  FaUserPlus,
  FaUserTimes,
} from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import { HiHome } from "react-icons/hi";
import { Avatar } from "antd";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GetFriendContext } from "../../../components/Contexts/AppFriendProvider";
import routesConfig from "../../../configs/config";
import ButtonConfirm from "../../../components/Button/ButtonFriend/ButtonConfirm";
import PropTypes from "prop-types";

function FriendPreview({ data, isAdd, typeReview }) {
  const { handleAddFriend, handleCancelAddFriendRequest, handleReplyFriend } =
    useContext(GetFriendContext);

  const handleReplyFriendClick = () => {
    handleReplyFriend(data.uid);
  };

  const handleAddFriendClick = () => {
    handleAddFriend(data?.uid);
  };

  const handleCancelAddFriendRequestClick = () => {
    handleCancelAddFriendRequest(data?.uid);
  };

  return (
    <div className="bg-white dark:bg-primary-700 shadow-md pt-4 pb-4 w-full">
      <div className="flex flex-col pl-4 pr-4 max-w-[400px]">
        <div className="flex items-center">
          <div className="flex ml-3 mr-3">
            <NavLink to={routesConfig.profile + data?.uid}>
              <Avatar
                src={data?.photoURL}
                alt=""
                size={90}
                className="rounded-full object-cover hover:opacity-95"
              />
            </NavLink>
          </div>

          <div className="flex-col pl-3 pr-3 space-y-2">
            <NavLink to={routesConfig.profile + data?.uid}>
              <div className="font-bold text-xl hover:underline dark:text-primary-50">
                {data?.displayName}
              </div>
            </NavLink>

            <div className="flex space-x-2 items-center dark:text-primary-100">
              <div className="text-gray-700 ">
                <FaUserFriends size={18} />
              </div>
              <div>4 ban be chung</div>
            </div>
            <div className="flex space-x-2 -ml-1 dark:text-primary-100">
              <div className="text-gray-700 ">
                <HiHome size={22} />
              </div>
              <div>
                Sống tại{" "}
                <span className="font-bold">Thành Phố Ho Chi Minh</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 w-full mt-5 items-center justify-center h-9 space-x-2">
          {
            typeReview === "Request" && (
              <>
                <ButtonConfirm
                  Icon={FaUserCheck}
                  fontText="font-medium"
                  colorIcon="text-primary-50"
                  typeButton="Confirm"
                  title="Phản hồi"
                  colorText="text-primary-50"
                  onClick={handleReplyFriendClick}
                />
              </>
            )
          }
          {typeReview === "Add" && (
            <>
              {!isAdd ? (
                <ButtonConfirm
                  Icon={FaUserPlus}
                  fontText="font-medium"
                  title="Thêm bạn bè"
                  colorText="text-primary-50"
                  colorIcon="text-primary-50"
                  typeButton="Confirm"
                  isVisibility={isAdd}
                  onClick={handleAddFriendClick}
                />
              ) : (
                <ButtonConfirm
                  Icon={FaUserTimes}
                  fontText="font-medium"
                  title="Hủy kết bạn"
                  colorText="text-primary-50"
                  colorIcon="text-primary-50"
                  typeButton="Confirm"
                  onClick={handleCancelAddFriendRequestClick}
                />
              )}
            </>
          )}
          <ButtonConfirm
            Icon={BsMessenger}
            fontText="font-medium"
            title="Nhắn tin"
            typeButton="Message"
            colorText="text-gray-900 dark:text-primary-50"
            colorIcon="text-gray-900 dark:text-primary-50"
          />
          <div className=" flex items-center justify-center">
            <ButtonConfirm
              Icon={SlOptions}
              fontText="font-medium"
              colorText="text-primary-50"
              typeButton="Message"
              colorIcon="text-black dark:text-primary-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

FriendPreview.propTypes = {
  data: PropTypes.array,
  isAdd: PropTypes.bool,
  typeReview: PropTypes.string.isRequired,
};

export default FriendPreview;
