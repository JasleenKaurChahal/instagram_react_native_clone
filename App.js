import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { TabNavigator } from "./src/Navigation/TabNavigator";
import { Drawer } from "./src/Navigation/DrawerNavigator";
const stackNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    headerMode: "none"
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "ReactNavigation" // Title to appear in status bar
    })
  }
);
export default createAppContainer(stackNavigator);
