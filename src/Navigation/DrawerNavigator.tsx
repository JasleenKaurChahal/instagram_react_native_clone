import * as React from "react";
import EditPage from "../components/Edit/EditPage";
import { createDrawerNavigator } from "react-navigation";
import Home from "../screens/Home/index";
import Search from "../screens/Search/index";
import Activity from "../screens/Activity/index";
import PostPage from "../components/postPage/index";
import Store from "../Store/Store";
import { TabNavigator } from "./TabNavigator";
import DrawerScreen from "../components/DrawerScreen";
export const Drawer = createDrawerNavigator(
  {
    Activity: { screen: Home },
    Nametag: { screen: Search },
    Saved: { screen: Activity },
    Friends: { screen: Activity },
    Discover: { screen: Activity },
    Facebook: { screen: Activity },
    Draw: { screen: TabNavigator },
    Settings: { screen: EditPage },
    PostPage: { screen: PostPage }
  },
  {
    drawerPosition: "right",
    drawerWidth: 200,
    drawerLockMode: "locked-closed",
    initialRouteName: "Draw",
    contentComponent: ({ store, navigation }: any) => (
      <DrawerScreen store={Store} navigation={navigation} />
    )
  }
);
