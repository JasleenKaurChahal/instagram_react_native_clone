import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import {
  SimpleLineIcons,
  Feather,
  Entypo,
  EvilIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
//import { FEED_DATA } from "../Store/Store";
import { observer } from "mobx-react";
@observer
export default class ProfileGrid extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View directionalLockEnabled={true} style={styles.scrollBar}>
          {this.props.store.FEED_DATA.map((item, index) => {
            return (
              <Image
                key={index}
                style={styles.feedContainer}
                source={{ uri: item.link }}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    marginBottom: 255
  },
  feedContainer: {
    //flex: 1,
    // position: "relative",
    top: 0,
    padding: 0,
    margin: 0,
    width: "33%",
    height: 133,
    marginTop: 0
  },
  scrollBar: {
    // flex: 1,
    // width: "100%",
    // top: 0,
    // left: 0,
    // right: 0,
    // marginBottom: 90

    display: "flex",
    flex: 1,
    flexDirection: "row",

    flexWrap: "wrap"
  }
});
