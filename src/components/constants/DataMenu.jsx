import {
  FriendFillIcon,
  FriendIcon,
    GameFillIcon,
    GameIcon,
    GroupFillIcon,
    GroupIcon,
    HomeFillIcon,
    HomeIcon,
    WatchFillIcon,
    WatchIcon
  } from "../icons/icons";
  import routesConfig from "../../configs/config";


export const DataMenu = [
    {
      id: 1,
      name: "Trang chủ",
      icon: <HomeIcon />,
      activeIcon: <HomeFillIcon />,
      to: routesConfig.home,
    },
    {
      id: 2,
      name: "Bạn Bè",
      icon: <FriendIcon />,
      activeIcon: <FriendFillIcon />,
      to: routesConfig.friends,
    },
    {
      id: 3,
      name: "Watch",
      icon: <WatchIcon w="28" h="28" />,
      activeIcon: <WatchFillIcon w="28" h="28"/>,
      to: routesConfig.watch,
    },
    {
      id: 4,
      name: "Nhóm",
      icon: <GroupIcon />,
      activeIcon: <GroupFillIcon w={28} h={28} />,
      to: routesConfig.group,
    },
    {
      id: 5,
      name: "Trò chơi",
      icon: <GameIcon />,
      activeIcon: <GameFillIcon />,
      to: routesConfig.game,
    },
   
  ];