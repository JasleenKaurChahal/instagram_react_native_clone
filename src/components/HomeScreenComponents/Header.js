import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  Entypo,
  EvilIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
import { INSTAGRAM_LOGO_PIC } from "../../constants/index";
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.tabBarInfoContainer}>
        <SimpleLineIcons name="camera" size={25} style={styles.cameraSymbol} />
        <Image source={INSTAGRAM_LOGO_PIC} style={styles.imageContainer} />
        <Feather name="tv" size={25} style={styles.tvSymbol} />
        <Entypo name="paper-plane" size={25} style={styles.messageSymbol} />
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
    paddingRight: 10,
    width: 100,
    height: 35
    // marginTop: 10
  },
  tvSymbol: {
    paddingLeft: 60
  },
  messageSymbol: {
    // marginTop: 10,
    paddingLeft: 15
  }
});
