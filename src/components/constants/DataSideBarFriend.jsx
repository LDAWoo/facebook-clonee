import { useContext, useState, useEffect } from "react";
import { FaUserFriends, FaUserPlus } from "react-icons/fa";
import { BiSolidUserDetail, BiSolidGift, BiSearchAlt2 } from "react-icons/bi";
import { RiUserSharedFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import routesConfig from "../../configs/config";
import SuggestionItem from "../Suggestions/SuggestionItem";
import { GetFriendContext } from "../Contexts/AppFriendProvider";
import ButtonRequestFriend from "../Button/ButtonFriend/ButtonRequestFriend";
import SuggestionHeader from "../../components/Suggestions/SuggestionHeader";
import SuggestionFriend from "../Suggestions/SuggestionFriend";
import FriendSetting from "../../pages/Friend/FriendSetting";
import ButtonAllFriend from "../Button/ButtonFriend/ButtonAllFriend";
const size = 22;

function DataSideBarFriend() {
  const { filterListFriends, filterFriendRequestList } =
    useContext(GetFriendContext);
  const [filteredFriends, setFilteredFriends] = useState([]);
  const [filteredFriendsRequest, setFilteredFriendsRequest] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredFriends(filterListFriends);
  }, [filterListFriends]);

  useEffect(() => {
    setFilteredFriendsRequest(filterFriendRequestList);
  }, [filterFriendRequestList]);

  const FriendSidebar = [
    {
      title: "Bạn bè",
      iconRight: <AiFillSetting size={24} />,
      data: <FriendSetting />,
    },
    {
      id: 1,
      icon: <FaUserFriends size={size} />,
      title: "Trang chủ",
      to: routesConfig.friends,
    },
    {
      id: 2,
      icon: <RiUserSharedFill size={size} />,
      title: "Lời mời kết bạn",
      children: {
        title: "Lời mời kết bạn",
        button: ButtonRequestFriend,
        data: filteredFriendsRequest,
      },
      to: routesConfig.friendsRequests,
    },
    {
      id: 3,
      icon: <FaUserPlus size={size} />,
      title: "Gợi ý",
      children:{
        title: "Gợi ý",
        button: '',
        data: filteredFriendsRequest,
      },  
      to: routesConfig.friendsSuggestions,
    },
    {
      id: 4,
      icon: <BiSolidUserDetail size={size} />,
      title: "Tất cả bạn bè",
      children: {
        title: "Tất cả bạn bè",
        search: {
          icon: <BiSearchAlt2 size={size} />,
          placeholder: "Tìm kiếm bạn bè",
        },
        button: ButtonAllFriend,
        data: filteredFriends,
      },
      to: routesConfig.friendsLists,
    },
    {
      id: 5,
      icon: <BiSolidGift size={size} />,
      title: "Sinh nhật",
      to: routesConfig.friendsBirthdays,
    },
    {
      id: 6,
      icon: <BiSolidUserDetail size={size} />,
      title: "Danh sách tùy chỉnh",
      to: routesConfig.friendsFriendList,
    },
  ];

  const [history, setHistory] = useState([{ data: FriendSidebar }]);
  const current = history[history.length - 1];

  const handClick = (isParent, item) => {
    if (isParent) {
      setHistory((prev) => [...prev, item.children]);
    }
  };


 

  const handleBack = () => {
    navigate(routesConfig.friends);
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderItems = () => {
    return FriendSidebar.map((item, index) => {
      const isParent = !!item.children;
      return (
        <div key={index}>
          {isParent ? (
            <SuggestionItem
              key={index}
              isChildren={isParent}
              data={item}
              onClick={() => handClick(isParent, item)}
            />
          ) : (
            <SuggestionItem
              isActive={1}
              key={index}
              isChildren={isParent}
              data={item}
            />
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex-col p-2 w-full">
      {history.length > 1 ? (
        <SuggestionFriend
          Component={SuggestionHeader}
          data={current}
          onBack={handleBack}
          link={{ to: routesConfig.friends, title: "Bạn bè" }}
        />
      ) : (
        renderItems()
      )}
    </div>
  );
}

export default DataSideBarFriend;
