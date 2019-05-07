import * as React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  createMaterialTopTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import NewsFeed from "../NewsFeed";
import ProfileGrid from "./ProfileGrid";
import ProfileVideos from "./ProfileVideos";
import Store from "../../Store/Store";
import PostPage from "../postPage/index";
// FIXME: define proptypes
export default class ProfileTabSection extends React.Component<any, any> {
  tabs: any = createMaterialTopTabNavigator(
    {
      ProfileGrid: {
        screen: ({ store, navigation }: any) => (
          <ProfileGrid store={Store} navigation={this.props.navigation} />
        )
      },
      // NewsFeed: {
      //   screen: ({ store, screenProps, navigation }: any) => (
      //     <NewsFeed store={Store} screenProps={{ rootNavigation: navigation }} />
      //   )
      // },
      NewsFeed: {
        screen: ({ store, navigation }: any) => {
          return <NewsFeed store={Store} navigation={this.props.navigation} />;
        }
      },
      ProfileVideos: {
        screen: ProfileVideos
      }
    },

    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;
          let IconComponent: any;
          let iconName;
          let iconSize;
          let iconColor;
          if (routeName === "ProfileGrid") {
            IconComponent = MaterialCommunityIcons;
            iconName = "grid";
            iconSize = 28;
            iconColor = focused ? "blue" : "grey";
          } else if (routeName === "NewsFeed") {
            IconComponent = MaterialIcons;
            iconName = "check-box-outline-blank";
            iconSize = 30;
            iconColor = focused ? "blue" : "grey";
          } else if (routeName === "ProfileVideos") {
            IconComponent = MaterialCommunityIcons;
            iconName = "account-box-outline";
            iconSize = 30;
            iconColor = focused ? "blue" : "grey";
          }
          return (
            <IconComponent name={iconName} size={iconSize} color={iconColor} />
          );
        }
      }),
      tabBarOptions: {
        hideTabBar: true,
        backgroundColor: "white",
        showIcon: true,
        showLabel: false,
        swipeEnabled: true,
        style: {
          backgroundColor: "#fff",
          height: 50,
          padding: 0,
          margin: 0,
          paddingBottom: 0,
          borderWidth: 0.5,
          borderTopColor: "grey",
          activeTintColor: "blue",
          inactiveTintColor: "grey"
        },
        indicatorStyle: {
          backgroundColor: "grey"
        },
        order: ["ProfileGrid", "NewsFeed", "ProfileVideos"],
        initialRouteName: "ProfileVideos"
      },
      barStyle: {
        justifyContent: "flex-end"
      }
    }
  );
  stackNavigator: any = createStackNavigator(
    {
      Tabs: { screen: this.tabs },
      PostPage: { screen: PostPage }
    },
    {
      headerMode: "none"
    },
    {
      // FIXME:
      navigationOptions: ({ navigation }) => ({
        title: "ReactNavigation" // Title to appear in status bar
      })
    }
  );
  //export default createAppContainer(stackNavigator);
  navigatorContainer = createAppContainer(this.stackNavigator);
  render() {
    // FIXME: remove logs before pushing
    console.log("tab section console " + JSON.stringify(this.props.navigation));
    //console.log("from profile tab " + JSON.stringify(this.props.navigation));
    return (
      <View
        style={{
          width: 400,
          height: "100%",
          backgroundColor: "white",
          top: 160
          // position: "absolute"
        }}
      >
        <this.navigatorContainer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  navigationBar: {
    marginTop: 10,
    width: "100%",
    padding: 0
  },
  navigationBarDetailSection: {
    borderTopColor: "grey",
    flex: 1,
    flexDirection: "row",
    paddingRight: 0,
    paddingLeft: 0,
    justifyContent: "space-between"
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
