// routesConfig
import routesConfig from "../configs/config";

//pages
import Home from "../pages/Home/Home";
// import Watch from '../pages/Watch/'
// import Marketplace from '../pages/Marketplace/'
// import Game from '../pages/Game/'
import Profile from "../pages/Profile";
// import Group from '../pages/Group/'
import DefaultLayout from "../components/layouts/DefaultLayout/DefaultLayout";
import LayoutComponent from "../components/layouts/LayoutComponent/LayoutComponent";
import DefaultLayoutProfile from "../components/layouts/LayoutProfile/DefaultLayout/DefaultLayout";

import Friend from "../pages/Friend/Friend";
import FriendRequest from "../pages/Friend/FriendRequest/FriendRequest";
import DataSideBarFriend from "../components/constants/DataSideBarFriend";

const publicRoutesPathComponent = [
  { path: routesConfig.home, component: Home, layout: DefaultLayout },
  { path: routesConfig.friends, component: Friend, layout: LayoutComponent, sidebar: DataSideBarFriend },
  { path: routesConfig.friendsRequests, component: FriendRequest, layout: LayoutComponent, sidebar: DataSideBarFriend },
  { path: routesConfig.friendsLists, component: FriendRequest, layout: LayoutComponent, sidebar: DataSideBarFriend },
  { path: routesConfig.profile, component: Profile, layout: DefaultLayoutProfile },
];

const privateRoutesPathComponent = [];

export { publicRoutesPathComponent, privateRoutesPathComponent };
