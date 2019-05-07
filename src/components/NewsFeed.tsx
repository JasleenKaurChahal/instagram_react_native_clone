import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
//import { FEED_DATA } from "../Store/Store";
import { STORY_PIC } from "../constants/index";
import { BOOKMARK_ICON } from "../constants/index";
import { observer } from "mobx-react";
@observer
export default class NewsFeed extends React.Component<
  { store: any; navigation: any },
  any
> {
  state = {
    lastImagePress: 0
  };
  // onButtonPress = (item: any) => {
  //   item.isLikeButtonClicked = !item.isLikeButtonClicked;
  //   !item.isLikeButtonClicked
  //     ? (item.likes = item.likes + 1)
  //     : (item.likes = item.likes - 1);
  // };
  // constructor() {
  //   super();

  //   this.handleClick = this.handleClick.bind(this);
  // }
  handleImageDoublePress = (item: any, index: number) => {
    this.props.navigation.navigate("PostPage", { item });
  };
  //to check if there is a double tap on image
  handleClick = (item: any, index: number) => {
    const now = new Date().getTime();
    if (this.state.lastImagePress && now - this.state.lastImagePress < 300) {
      //300 is DOUBLE_PRESS_DELAY
      delete this.state.lastImagePress;
      this.handleImageDoublePress(item, index);
    } else {
      this.state.lastImagePress = now;
    }
  };
  render() {
    console.log(
      "Navigation options on NewsFeed are " +
        JSON.stringify(this.props.navigation)
    );
    return (
      <ScrollView directionalLockEnabled={true} style={styles.scrollBar}>
        {this.props.store.FEED_DATA.map((item: any, index: number) => {
          //console.log(typeof item, item, item.link);
          return (
            <View key={index}>
              <View style={styles.tabBarInfoContainer2}>
                <Image source={STORY_PIC} style={styles.detailContainer} />
                <Text style={styles.detailProfile}>{item.name}</Text>
                <Entypo
                  name="dots-three-horizontal"
                  style={styles.dotsSymbol}
                />
              </View>
              <TouchableWithoutFeedback
                onPress={() => this.handleClick(item, index)}
              >
                <Image
                  style={styles.feedContainer}
                  source={{ uri: item.link }}
                />
              </TouchableWithoutFeedback>
              <View style={styles.tabBarInfoContainer3}>
                {!item.isLikeButtonClicked ? (
                  <Ionicons
                    name="ios-heart"
                    style={styles.likeSymbolPressed}
                    size={30}
                    onPress={() => this.props.store.onButtonPress(item)}
                    //onPress={() => this.onButtonPress(item)}
                  />
                ) : (
                  <Ionicons
                    name="md-heart-empty"
                    style={styles.likeSymbol}
                    size={30}
                    onPress={() => this.props.store.onButtonPress(item)}
                    //onPress={() => this.onButtonPress(item)}
                  />
                )}
                <FontAwesome
                  name="comment-o"
                  style={styles.commentSymbol}
                  size={25}
                />
                <Entypo
                  name="paper-plane"
                  size={25}
                  style={styles.paperPlane}
                />
                <Image source={BOOKMARK_ICON} style={styles.savedContainer} />
              </View>
              <View style={styles.tabBarInfoContainer4}>
                <Text style={styles.postDescription}>
                  <Text style={styles.makeBold}>{item.likes} likes</Text>
                  {"\n"}
                  <Text style={styles.makeBold}>{item.name} </Text>
                  <Text>{item.quotes}</Text>
                  <Text style={styles.makeTextLighter}>
                    {"\n"}
                    {item.comments}
                    {"\n"}
                  </Text>
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 30,
    marginBottom: 0,
    paddingBottom: 5
  },
  cameraSymbol: {
    paddingRight: 80
  },
  imageContainer: {
    paddingRight: 10,
    width: 100,
    height: 35,
    marginTop: 10
  },
  tvSymbol: {
    paddingLeft: 60
  },
  messageSymbol: {
    marginTop: 10,
    paddingLeft: 15
  },
  storyContainer: {
    padding: 0,
    margin: 5,
    width: 80,
    height: 80,
    justifyContent: "space-between"
  },
  bodySection: {
    position: "relative",
    top: 80,
    height: 150,
    marginTop: 0,
    margin: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 70
  },
  storyDescription: {
    flex: 1,
    flexDirection: "column",
    fontSize: 5,
    backgroundColor: "red"
  },
  tabBarInfoContainer2: {
    position: "absolute",
    borderTopColor: "#fbfbfb",
    borderTopWidth: 1,
    top: 0,
    left: 0,
    right: 0,
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 10,
    marginBottom: 0
  },
  feedContainer: {
    position: "relative",
    top: 45,
    padding: 0,
    margin: 0,
    width: "100%",
    height: 400,
    marginTop: 0
  },
  scrollBar: {
    flex: 1,
    left: 0,
    right: 0
  },
  detailContainer: {
    position: "absolute",
    marginLeft: 10,
    paddingLeft: 10,
    width: 30,
    height: 30,
    marginBottom: 30,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbfbfb"
  },
  detailProfile: {
    paddingLeft: 15,
    fontWeight: "bold"
  },
  dotsSymbol: {
    paddingLeft: 250
  },
  tabBarInfoContainer3: {
    position: "relative",
    marginTop: 0,
    flex: 1,
    top: 18,
    left: 0,
    right: 0,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10
  },
  tabBarInfoContainer4: {
    fontWeight: "bold",
    position: "relative",
    marginTop: 0,
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    paddingLeft: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    margin: 1,
    justifyContent: "space-between"
  },
  savedContainer: {
    height: 40,
    width: 40,
    marginRight: 10,
    marginLeft: 215,
    alignItems: "center"
  },
  makeBold: { fontWeight: "bold" },
  makeTextLighter: { fontWeight: "100" },
  paperPlane: { top: 1 },
  likeSymbol: {
    paddingRight: 10,
    top: 2
  },
  likeSymbolPressed: {
    color: "red",
    paddingRight: 10,
    top: 2
  },
  commentSymbol: { paddingRight: 10 },
  postDescription: { paddingRight: 10, paddingLeft: 10 }
});
