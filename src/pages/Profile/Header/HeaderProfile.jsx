import { Avatar } from "antd";
import ButtonConfirm from "../../../components/Button/ButtonFriend/ButtonConfirm";
import { FaUserTimes, FaUserCheck, FaUserPlus } from "react-icons/fa";

import { BsMessenger } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import useFirebaseStore from "../../../hooks/useFirebaseStore";

function HeaderProfile({ uid, onUp, onDown }) {
  const condition = {
    fieldName: "uid",
    operator: "==",
    compareValue: uid,
  };

  const profile = useFirebaseStore("users", condition, "uid");

  return (
    <div className="flex flex-col pl-5 pr-5">
      <div className="flex justify-between max-md:justify-center max-md:flex-col">
        <div className="flex items-center max-md:flex-col max-md:justify-center">
          <div className="">
            <Avatar className="rounded-full border-solid border-white border-4" src={profile[0]?.photoURL} size={168} />
          </div>
          <div className="flex-col items-center max-md:flex max-md:justify-center">
            <div className="font-bold text-3xl">{profile[0]?.displayName}</div>
            <div className="flex">
              <div>3k ban be</div>
              <div>7 ban chung</div>
            </div>
            <div>
              <Avatar.Group>
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
              </Avatar.Group>
            </div>
          </div>
        </div>

        <div className="flex items-center max-md:justify-center">
          <div className="flex space-x-2 items-center">
            <div className="w-32">
              <ButtonConfirm Icon={FaUserCheck} bgClass="bg-gray-200" bgHoverClass="bg-gray-300" title="Bạn bè" />
            </div>
            <div className="w-32">
              <ButtonConfirm
                Icon={FaUserPlus}
                bgClass="bg-blue-700"
                bgHoverClass="bg-blue-600"
                colorText="text-white"
                title="Thêm bạn bè"
                // nClick={onClick}
                // isVisibility={isAdd}o
              />
            </div>
            <div className="w-32">
              <ButtonConfirm Icon={FaUserTimes} bgClass="bg-blue-700" bgHoverClass="bg-blue-600" colorText="text-white" title="Hủy lời mời" />
            </div>
            <div className="w-32">
              <ButtonConfirm Icon={FaUserCheck} bgClass="bg-blue-700" bgHoverClass="bg-blue-600" colorText="text-white" title="Xác nhận" />
            </div>
            <div className="w-32">
              <ButtonConfirm Icon={BsMessenger} bgClass="bg-blue-700" bgHoverClass="bg-blue-600" title="Nhắn tin" colorText="text-white" />
            </div>
            {/* {isVisibleSuggestions ? 
                                    ( */}
            <div
              className="flex w-14 cursor-pointer bg-gray-200 hover:bg-gray-300 
                                        items-center justify-center flex-grow h-9 font-medium rounded-md "
              onClick={onUp}
            >
              <MdKeyboardArrowUp size={24} />
            </div>
            {/* )
                                    : */}
            (
            <div
              className="flex w-14 cursor-pointer bg-gray-200 hover:bg-gray-300 
                                        items-center justify-center flex-grow h-9 font-medium rounded-md "
              onClick={onDown}
            >
              <MdKeyboardArrowDown size={24} />
            </div>
            ){/* } */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderProfile;
