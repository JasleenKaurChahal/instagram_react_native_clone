import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import Drawer from "../../../App";
import { any } from "prop-types";
export default class ProfileHeader extends React.Component<
  { navigation: any },
  any
> {
  constructor(props: any) {
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
  },
  profileSymbol: {
    paddingLeft: 95
  }
});
