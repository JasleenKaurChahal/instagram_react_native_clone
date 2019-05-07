import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  SimpleLineIcons,
  Feather,
  Entypo,
  EvilIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
import { INSTAGRAM_LOGO_PIC } from "../../constants/index";
export default class Header extends React.Component<any, any> {
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
  },
  tvSymbol: {
    paddingLeft: 60
  },
  messageSymbol: {
    paddingLeft: 15
  }
});
