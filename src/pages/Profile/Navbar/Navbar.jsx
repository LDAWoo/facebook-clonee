import { useState } from "react";
import { SlOptions } from "react-icons/sl";
import routesConfig from "../../../configs/config";
import ButtonNavbar from "./ButtonNavbar";

function Navbar({ uid }) {
  const [isActive, setIsActive] = useState(1);

  const MENU_ITEM = [
    {
      id: 1,
      title: "Bài viết",
      to: routesConfig.profilePosts.replace(":uid", uid),
    },
    {
      id: 2,
      title: "Giới thiệu",
      to: routesConfig.profileAbout.replace(":uid", uid),
    },
    {
      id: 3,
      title: "Bạn bè",
      to: routesConfig.profileFriends.replace(":uid", uid),
    },
    {
      title: "Ảnh",
      to: routesConfig.profilePhotos.replace(":uid", uid),
    },
    {
      id: 4,
      title: "Video",
      to: routesConfig.profileVideos.replace(":uid", uid),
    },
    {
      id: 5,
      title: "Check in",
      to: routesConfig.profileMap.replace(":uid", uid),
    },
  ];

  const handleClickNavbar = (id) => {
    setIsActive(id);
  };

  return (
    <div className="items-center pl-5 pr-5 w-full mt-5 mb-5">
      <div className="flex border-t-2 border-gray-300 items-center justify-between">
        <div className="flex space-x-2 mt-1">
          {MENU_ITEM.map((data, index) => (
            <ButtonNavbar key={index} data={data} isActive={isActive} onClick={() => handleClickNavbar(data.id)} />
          ))}
        </div>

        <div>
          <div className="p-3 rounded-md hover:bg-gray-300 cursor-pointer">
            <SlOptions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
