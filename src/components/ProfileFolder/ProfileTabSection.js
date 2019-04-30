import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Button,
  Alert
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  Entypo,
  EvilIcons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import {
  createMaterialTopTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import NewsFeed from "../NewsFeed";
import ProfileGrid from "./ProfileGrid";
import ProfileVideos from "./ProfileVideos";
// function Home() {
//   return (
//     <View style={styles.container}>
//       <Text>bhgf</Text>
//     </View>
//   );
// }
// function Search() {
//   return (
//     <View style={styles.container}>
//       <Text>Search 1</Text>
//     </View>
//   );
// }
// function Add() {
//   return (
//     <View style={styles.container}>
//       <Text>Add 1</Text>
//     </View>
//   );
// }
import Store from "../../Store/Store";
const Tabs = createMaterialTopTabNavigator(
  {
    ProfileGrid: {
      screen: (store) => <ProfileGrid store={Store} />
    },
    NewsFeed: {
      screen: (store) => <NewsFeed store={Store} />
    },
    ProfileVideos: {
      screen: ProfileVideos
    }
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let IconComponent;
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
    // tabBarOptions:{
    //   headerMode: 'none',        // I don't want a NavBar at top
    //   tabBarPosition: 'bottom',  // So your Android tabs go bottom
    //   tabBarOptions: {
    //     activeTintColor: 'red',  // Color of tab when pressed
    //     inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
    //     showIcon: 'true', // Shows an icon for both iOS and Android
    //     showLabel: (Platform.OS !== 'android'), //No label for Android
    //     labelStyle: {
    //       fontSize: 11,
    //     },
    //     style: {
    //       backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
    //       height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off.
    //     }
    //   },
    barStyle: {
      justifyContent: "flex-end"
    }
  }
);
const App = createAppContainer(Tabs);
export default class ProfileTabSection extends React.Component {
  render() {
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
        <App />
      </View>

      // <View style={styles.navigationBar}>
      //   <View style={styles.navigationBarDetailSection}>
      //     {/* <MaterialCommunityIcons name="grid" size={30} />
      //       <MaterialIcons name="check-box-outline-blank" size={30} />
      //       <MaterialCommunityIcons name="account-box-outline" size={30} /> */}
      //     <App />
      //   </View>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  navigationBar: {
    //borderWidth: 0.5,
    //borderColor: "red",
    marginTop: 10,
    width: "100%",
    padding: 0
  },
  navigationBarDetailSection: {
    //borderWidth: 0.5,
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
