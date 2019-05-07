import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity
} from "react-native";
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
export default class ProfileGrid extends React.Component<
  { store: any; navigation: any },
  any
> {
  handleClick = (item: any) => {
    // Alert.alert("This is awesome \n Double tap succeed");
    this.props.navigation.navigate("PostPage", { item });
    // console.log(
    //   "Post page naviagtion " + JSON.stringify(this.props.navigation)
    // );
  };
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.scrollBar}>
          {this.props.store.FEED_DATA.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.click}
                onPress={() => this.handleClick(item)}
              >
                <Image
                  style={styles.feedContainer}
                  source={{ uri: item.link }}
                />
              </TouchableOpacity>
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
    padding: 0,
    margin: 0,
    height: 133,
    marginTop: 0
  },
  scrollBar: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  click: { width: "33%" }
});
