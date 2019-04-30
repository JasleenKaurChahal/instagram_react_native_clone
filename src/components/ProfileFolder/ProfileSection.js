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
import Home from "../../screens/Home/index";
import Search from "../../screens/Search/index";
import Add from "../../screens/Add/index";
import { STORY_PIC } from "../../constants/index";
const Tabs = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home
    },
    NewsFeed: {
      screen: NewsFeed
    },
    Add: {
      screen: Add
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent;
        let iconName;
        let iconSize;

        if (routeName === "Home") {
          IconComponent = MaterialCommunityIcons;
          iconName = "grid";
          iconSize = 28;
        } else if (routeName === "NewsFeed") {
          IconComponent = MaterialIcons;
          iconName = "check-box-outline-blank";
          iconSize = 30;
        } else if (routeName === "Add") {
          IconComponent = MaterialCommunityIcons;
          iconName = "account-box-outline";
          iconSize = 30;
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
      style: { height: 45, padding: 0, margin: 0, paddingBottom: 5 },
      order: ["Home", "NewsFeed", "Add"],
      initialRouteName: "Add",
      activeTintColor: "black",
      inactiveTintColor: "black"
    },
    // barStyle: {
    //   justifyContent: "flex-end"
    // },
    style: {
      backgroundColor: "white"
    },
    statusBarStyle: "light-content"
  }
);
const App = createAppContainer(Tabs);
export default class ProfileSection extends React.Component {
  _onPress() {
    Alert.alert("on Press!");
  }
  render() {
    return (
      <View style={styles.storySection}>
        <View style={styles.bodySection}>
          <View>
            <Image source={STORY_PIC} style={styles.storyContainer} />
          </View>
          <View style={styles.detailSection}>
            <View style={styles.bodyDetailSection}>
              <View style={styles.profileDescription}>
                <Text style={styles.numberDescription}>10</Text>
                <Text style={styles.textDescription}>posts</Text>
              </View>
              <View style={styles.profileDescription}>
                <Text style={styles.numberDescription}>250</Text>
                <Text style={styles.textDescription}>followers</Text>
              </View>
              <View style={styles.profileDescription}>
                <Text style={styles.numberDescription}>200</Text>
                <Text style={styles.textDescription}>following</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Edit Profile"
                onPress={this._onPress}
                color="black"
                accessibilityLabel="Tap on Me"
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.storyDescription}>
            Galaxy{"\n"}I m scared to get close but I hate being alone..All I
            Long for That feeling to Not feel at all
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  storySection: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    top: 80,
    width: "100%",
    position: "absolute",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },

  buttonContainer: {
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    borderRadius: 5,
    padding: 0,
    width: "100%",
    height: 30,
    fontSize: 1
  },
  bodySection: {
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
    flexDirection: "row"
  },

  storyContainer: {
    padding: 5,
    margin: 5,
    width: 90,
    height: 90,
    justifyContent: "center"
  },
  storyDescription: {
    alignItems: "center",
    paddingLeft: 20,

    paddingVertical: 0
  },

  detailSection: {
    //borderWidth: 0.5,
    //borderColor: "#d6d7da",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    top: 0,
    width: "60%",
    position: "relative",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  bodyDetailSection: {
    //borderWidth: 0.5,
    //borderColor: "red",
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    textAlign: "center",
    padding: 5
  },
  profileDescription: {
    //borderWidth: 0.5,
    //borderColor: "green",
    textAlign: "center"
  },
  textDescription: {
    fontWeight: "100",
    textAlign: "center"
  },
  numberDescription: {
    // flex: 1,
    padding: 0,
    // marginRight: 15,
    // marginLeft: 15,
    // width: 50,
    // height: 20,
    textAlign: "center",
    // justifyContent: "center",
    // paddingTop: 15,
    fontSize: 20
  },
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
