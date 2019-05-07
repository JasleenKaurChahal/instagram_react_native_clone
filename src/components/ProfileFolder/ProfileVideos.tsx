import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { VIDEO_IMAGE } from "../../constants/index";
import { any } from "prop-types";

// FIXME: add proptypes
export default class ProfileVideos extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={VIDEO_IMAGE} />
        <Text style={styles.textStyle}>Photos and Videos Of You</Text>
        <Text style={styles.textStyle1}>
          // FIXME: use padding or margin and remove next line character
          {"\n"}When people tag you in photos or videos, they'll appear here
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    top: 100
  },
  textStyle: {
    fontSize: 20
  },
  textStyle1: {
    width: "70%",
    textAlign: "center"
  },
  image: { width: 70, height: 70 }
});
