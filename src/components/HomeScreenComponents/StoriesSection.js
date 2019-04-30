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
import { STORY_PIC } from "../../constants/index";

import { observer } from "mobx-react";
@observer
export default class StoriesSection extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     STORY_POSTED_BY: [
  //       `Galaxy`,
  //       `Stars`,
  //       `Planets`,
  //       `MilkyWay`,
  //       `Moon`,
  //       `Thunder`,
  //       `Sky`,
  //       `Meteroids`,
  //       `Sprinkles`
  //     ]
  //   };
  // }
  //if we use this then we have to use this.state.STORY_POSTED_BY
  render() {
    return (
      <View style={styles.storySection}>
        <View style={styles.bodySection}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.props.store.STORY_POSTED_BY.map((story, i) => {
              return (
                <View key={i}>
                  <Image source={STORY_PIC} style={styles.storyContainer} />
                  <Text style={styles.storyDescription}>{story}</Text>
                </View>
              );
            })}
          </ScrollView>
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
    padding: 0,
    justifyContent: "space-between",
    alignItems: "center"
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
    width: 80,
    height: 80,
    justifyContent: "center"
  },
  storyDescription: {
    alignItems: "center",
    paddingLeft: 25,
    paddingRight: 25,
    paddingVertical: 0
  }
});
