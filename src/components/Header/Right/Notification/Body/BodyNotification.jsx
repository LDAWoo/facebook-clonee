import { defaultImage } from "../../../../Images/DefaultImage";
import { GroupFillIcon, WatchFillIcon } from "../../../../icons/icons";
import { FaUser } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";

import ButtonRoundedFull from "../../../../Button/ButtonRounded/ButtonRoundedFull";
import { useState } from "react";
import HeaderNotification from "./HeaderNotification";
const avatar = defaultImage;
const DataNotification = [
  {
    id: 1,
    avatar: avatar,
    name: "Oggy and the cockroaches",
    describe: "đã đăng 4 video mới trong đó có Once upon a time, somewhere",
    time: "6 giờ trước",
    type: "video",
    isRead: true,
  },
  {
    id: 2,
    avatar: avatar,
    name: "Oggy and the cockroaches",
    describe:
      "đã đăng 4 video mới trong đó có Once upon a time, somewhere đã đăng 4 video mới trong đó có Once upon a time, somewhere",
    time: "6 giờ trước",
    type: "group",
    isRead: false,
  },
  {
    id: 3,
    avatar: avatar,
    name: "Oggy and the cockroaches",
    describe: "đã đăng 4 video mới trong đó có Once upon a time, somewhere",
    time: "6 giờ trước",
    type: "message",
    isRead: false,
  },
  {
    id: 4,
    avatar: avatar,
    name: "Oggy and the cockroaches",
    describe: "đã đăng 4 video mới trong đó có Once upon a time, somewhere",
    time: "6 giờ trước",
    type: "message",
    isRead: true,
  },
  {
    id: 5,
    avatar: avatar,
    name: "Oggy and the cockroaches",
    describe: "đã đăng 4 video mới trong đó có Once upon a time, somewhere",
    time: "6 giờ trước",
    type: "friend",
    isRead: false,
  },
];

const TypeNotification = [
  {
    message: {
      icon: <BiSolidMessageRounded />,
      backgroundColor: "#00C665",
    },
  },
  {
    group: {
      icon: <GroupFillIcon />,
      backgroundColor: "#1B74E4",
    },
  },
  {
    friend: {
      icon: <FaUser />,
      backgroundColor: "#1B74E4",
    },
  },
  {
    video: {
      icon: <WatchFillIcon />,
      backgroundColor: "#1B74E4",
    },
  },
];

function BodyNotification() {
  const [visibleOptions, setVisibleOptions] = useState([]);
  const [isHover, setIsHover] = useState(true);

  const handleClick = (id) => {
    console.log(id);
  };

  const handleMouseEnter = (id) => () => {
    setVisibleOptions((prevOptions) => [
      ...prevOptions,
      { show: true, id: id },
    ]);
  };

  const handleMouseLeave = (id) => () => {
    setVisibleOptions((prevOptions) =>
      prevOptions.filter((opt) => opt.id !== id)
    );
  };

  const handleButtonMouseEnter = () => {
    setIsHover(false);
  };

  const handleButtonMouseLeave = () => {
    setIsHover(true);
  };

  return (
    <div className="pt-2 pb-2 overflow-y-auto">
      <div className="flex-col">
        <HeaderNotification />

        <div className="flex-col pl-2 pr-2">
          {DataNotification.map((notification, index) => (
            <div
              key={index}
              className={`relative flex p-1 rounded-md cursor-pointer ${
                isHover ? "hover:bg-gray-200 hover:dark:bg-primary-500" : ""
              }    duration-200`}
              onMouseEnter={handleMouseEnter(notification.id)}
              onMouseLeave={handleMouseLeave(notification.id)}
            >
              <div className="relative">
                <div className="relative w-[56px] h-[56px]">
                  <img
                    className="w-full h-full rounded-full"
                    src={notification.avatar}
                    alt="Image Notification"
                  />
                  <div>
                    {TypeNotification.map((type) => {
                      if (Object.keys(type)[0] === notification.type) {
                        const backgroundColor =
                          type[Object.keys(type)[0]].backgroundColor;
                        return (
                          <div
                            className={`flex absolute top-[60%] right-[-5%] items-center justify-center rounded-full w-7 h-7 text-white p-1`}
                            key={Object.keys(type)[0]}
                            style={{backgroundColor: backgroundColor
                            }}
                          >
                            {type[Object.keys(type)[0]].icon}
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>

              <div className="ml-2 mr-2">
                <span
                  className="space-x-1 overflow-hidden text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  <div
                    className={`text-[15px] space-x-1 ${
                      notification.isRead
                        ? "dark:text-primary-200"
                        : "dark:text-primary-50"
                    } `}
                  >
                    <span className="font-medium">{notification.name}</span>
                    <span className="font-normal">{notification.describe}</span>
                  </div>
                </span>
                <span
                  className={`font-medium text-[13px] ${
                    notification.isRead
                      ? "dark:text-primary-200"
                      : "text-fb-primary"
                  }`}
                >
                  {notification.time}
                </span>
              </div>

              <div className="flex items-center w-5 p-1">
                {!notification.isRead && (
                  <span className=" rounded-full w-3 h-3 bg-fb-primary" />
                )}
              </div>

              {visibleOptions.some((opt) => opt.id === notification.id) && (
                <div className="absolute top-[33%] right-[8%]">
                  <div>
                    <ButtonRoundedFull
                      isTippy={false}
                      backGroundColor={{
                        isBg: true,
                        color: "dark:bg-primary-400 shadow-lg",
                      }}
                      className="dark:text-primary-200"
                      isBackground={true}
                      onClick={() => handleClick(notification.id)}
                      onMouseEnter={handleButtonMouseEnter}
                      onMouseLeave={handleButtonMouseLeave}
                      Icon={<SlOptions />}
                      size={36}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BodyNotification;
