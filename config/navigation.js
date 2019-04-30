import React from "react";
//import { TabNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "../src/screens/Home/index";

export default createBottomTabNavigator(
  {
    Album: { screen: Home },
    Library: { screen: Home },
    History: { screen: Home },
    Cart: { screen: Home }
  },
  {
    initialRouteName: "Album",
    activeTintColor: "#F44336"
  }
);
// export  const Tab = TabNavigator(
//   {
//     Home: {
//       screen: Home
//     },
//     First: {
//       screen: Home
//     },
//     Second: {
//       screen: Home
//     }
//   },
// {
//   tabBarPosition: "bottom",
//   swipeEnabled: true,
//   tabBarOptions: {
//     activeTintColor: "#f2f2f2",
//     activeBackgroundColor: "#2EC4B6",
//     inactiveTintColor: "#666",
//     labelStyle: {
//       fontSize: 22,
//       padding: 12
//     }
//   }
// }
// );
