import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  Entypo,
  EvilIcons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Octicons
} from "@expo/vector-icons";
import Drawer from "../../../App";
export default class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleThreeBar = this.handleThreeBar.bind(this);
  }
  handleThreeBar() {
    //console.log(this.props.navigation, "navigation");
    this.props.navigation.openDrawer();
  }
  render() {
    return (
      <View style={styles.tabBarInfoContainer}>
        <MaterialCommunityIcons
          name="restore-clock"
          size={30}
          style={styles.cameraSymbol}
        />
        <Text style={styles.imageContainer}>Galaxy</Text>
        <Ionicons name="ios-arrow-down" size={20} />
        <TouchableOpacity onPress={this.handleThreeBar}>
          <Octicons name="three-bars" size={25} style={styles.profileSymbol} />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabBarInfoContainer: {
    // flex: 1,
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // padding: 0,
    // backgroundColor: "green",
    // flexDirection: "row",
    // justifyContent: "flex-end",
    // alignItems: "flex-end"
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 40,
    marginBottom: 0,
    paddingBottom: 0
  },
  cameraSymbol: {
    paddingRight: 80
  },
  imageContainer: {
    paddingLeft: 35,
    width: 100,
    height: 35,
    fontSize: 20
    // marginTop: 10
  },

  profileSymbol: {
    // marginTop: 10,
    paddingLeft: 95
  }
});
