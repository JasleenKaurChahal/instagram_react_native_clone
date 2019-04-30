import React from "react";
import EditPage from "../components/Edit/EditPage";
import {
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "../screens/Home/index";
import Search from "../screens/Search/index";
import Add from "../screens/Add/index";
import Activity from "../screens/Activity/index";
import Profile from "../screens/Profile/index";

import {
  Feather,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import Store from "../Store/Store";
import { TabNavigator } from "./TabNavigator";
import DrawerScreen from "../components/DrawerScreen";
export const Drawer = createDrawerNavigator(
  {
    Activity: { screen: Home },
    Nametag: { screen: Search },
    // Add: { screen: Add },
    Saved: { screen: Activity },
    Friends: { screen: Activity },
    Discover: { screen: Activity },
    Facebook: {
      screen: Activity
    },
    // Profile: { screen: Profile }
    Draw: { screen: TabNavigator },
    Settings: {
      screen: EditPage
    }
  },
  {
    drawerPosition: "right",
    drawerWidth: 200,
    drawerLockMode: "locked-closed",
    initialRouteName: "Draw",
    contentComponent: ({ store, navigation }) => (
      <DrawerScreen store={Store} navigation={navigation} />
    )
  }
);
