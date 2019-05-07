import { createAppContainer, createStackNavigator } from "react-navigation";
import { Drawer } from "./src/Navigation/DrawerNavigator";

const stackNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    headerMode: "none"
  },
  {
    navigationOptions: () => ({
      headerMode: "screen",
      title: "ReactNavigation" // Title to appear in status bar
    })
  }
);

export default createAppContainer(stackNavigator);
