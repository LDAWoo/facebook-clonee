import { Avatar } from "antd";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routesConfig from "../../../configs/config";
import MenuTippyHeadless from "../../TippyHeadless/TippyHeadlessCustom";
import { SlOptions } from "react-icons/sl";
import ButtonRoundedFull from "../ButtonRounded/ButtonRoundedFull";
import { useState } from "react";

function ButtonAllFriend({ data }) {
  const [hoverStates, setHoverStates] = useState({
    mutualFriend: false,
    option: false,
  });

  const RenderAllFriend = () => {
    return (
      <div className="flex-col p-3 text-sm dark:text-primary-500 text-primary-50">
        <div>Nguyễn Thị Thu Trang</div>
        <div>Trường An</div>
        <div>Song Nguyễn</div>
        <div>Lê Trương Hoàng Nam</div>
        <div>Trần Thu Huyền</div>
      </div>
    );
  };

  const handleMouseEnter = (type) => {
    setHoverStates((prev) => ({
      ...prev,
      [type]: true,
    }));
  };

  const handleMouseLeave = (type) => {
    setHoverStates((prev) => ({
      ...prev,
      [type]: false,
    }));
  };

  return (
    <NavLink to={routesConfig.profile.replace(":uid", data?.uid)}>
      <div
        className={`flex items-center cursor-pointer ${
          !hoverStates.mutualFriend && !hoverStates.option && "hover:bg-gray-100 hover:dark:bg-primary-500"
        }  duration-200 p-[6px] rounded-lg`}
      >
        <div className="flex items-center  flex-1">
          <Avatar src={data?.photoURL} size={58} />
          <div className="flex-col ml-2">
            <div className="text-lg dark:text-primary-50">
              {data?.displayName}
            </div>
            <MenuTippyHeadless
              width={280}
              backGroundColor="bg-primary-700 dark:bg-primary-50"
              isVisible={hoverStates.mutualFriend}
              placement="bottom-start"
              render={<RenderAllFriend />}
            >
              <div
                className="text-[13px] text-gray-500 dark:text-primary-200"
                onMouseEnter={() => handleMouseEnter("mutualFriend")}
                onMouseLeave={() => handleMouseLeave("mutualFriend")}
              >
                3 bạn chung
              </div>
            </MenuTippyHeadless>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <MenuTippyHeadless>
            <div>
              <ButtonRoundedFull
                Icon={<SlOptions />}
                isTippy={false}
                size={30}
                onMouseEnter={() => handleMouseEnter("option")}
                onMouseLeave={() => handleMouseLeave("option")}
              />
            </div>
          </MenuTippyHeadless>
        </div>
      </div>
    </NavLink>
  );
}

ButtonAllFriend.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ButtonAllFriend;
