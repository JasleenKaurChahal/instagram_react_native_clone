import * as React from "react";
import { createBottomTabNavigator } from "react-navigation";
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
export const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: ({ screenProps, navigation }: any) => (
        <Home screenProps={{ rootNavigation: navigation }} />
      )
    },
    Search: { screen: Search },
    Add: { screen: Add },
    Activity: { screen: Activity },
    Profile: {
      screen: ({ screenProps, navigation }: any) => (
        <Profile screenProps={{ rootNavigation: navigation }} />
      )
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent: any;
        let iconName;
        let iconSize;
        // FIXME: can use switch case in this situation
        if (routeName === "Home") {
          IconComponent = MaterialCommunityIcons;
          iconName = `home${focused ? "" : "-outline"}`;
          iconSize = 30;
        } else if (routeName === "Search") {
          IconComponent = Ionicons;
          iconName = `${focused ? "md-search" : "ios-search"}`;
          iconSize = focused ? 32 : 30;
        } else if (routeName === "Add") {
          IconComponent = focused ? Entypo : FontAwesome;
          iconName = `${focused ? "squared-plus" : "plus-square-o"}`;
          iconSize = 28;
        } else if (routeName === "Activity") {
          IconComponent = focused ? FontAwesome : MaterialCommunityIcons;
          iconName = `heart${focused ? "" : "-outline"}`;
          iconSize = focused ? 27 : 29;
        } else if (routeName === "Profile") {
          IconComponent = focused ? FontAwesome : Feather;
          iconName = "user";
          iconSize = focused ? 28 : 30;
        }
        return (
          <IconComponent name={iconName} size={iconSize} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      swipeEnabled: true,
      style: { height: 30, padding: 5, margin: 2, paddingBottom: 0 },
      order: ["Home", "Search", "Add", "Activity", "Profile"],
      initialRouteName: "Add",
      activeTintColor: "black",
      inactiveTintColor: "black"
    },
    // FIXME:
    barStyle: {
      justifyContent: "flex-end"
    }
  }
);
