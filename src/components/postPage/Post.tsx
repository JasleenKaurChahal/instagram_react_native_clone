import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
//import { FEED_DATA } from "../Store/Store";
import { STORY_PIC } from "../../constants/index";
import { BOOKMARK_ICON } from "../../constants/index";

import { observer } from "mobx-react";
@observer
export default class Post extends React.Component<any, any> {
  render() {
    return (
      <ScrollView directionalLockEnabled={true} style={styles.scrollBar}>
        <View style={styles.viewStyle}>
          <View style={styles.tabBarInfoContainer2}>
            <Image source={STORY_PIC} style={styles.detailContainer} />
            <Text style={styles.detailProfile}>{this.props.item.name}</Text>
            <Entypo name="dots-three-horizontal" style={styles.dotsSymbol} />
          </View>
          <Image
            //style={styles.feedContainer}
            style={styles.image}
            source={{
              uri: this.props.item.link
            }}
          />
          <View style={styles.tabBarInfoContainer3}>
            {!this.props.item.isLikeButtonClicked ? (
              <Ionicons
                name="ios-heart"
                style={styles.likeSymbolPressed}
                size={30}
                onPress={() => this.props.store.onButtonPress(this.props.item)}
                //onPress={() => this.onButtonPress(item)}
              />
            ) : (
              <Ionicons
                name="md-heart-empty"
                style={styles.likeSymbol}
                size={30}
                onPress={() => this.props.store.onButtonPress(this.props.item)}
                //onPress={() => this.onButtonPress(item)}
              />
            )}
            <FontAwesome
              name="comment-o"
              style={styles.commentSymbol}
              size={25}
            />
            <Entypo name="paper-plane" size={25} style={styles.paperPlane} />
            <Image source={BOOKMARK_ICON} style={styles.savedContainer} />
          </View>
          <View style={styles.tabBarInfoContainer4}>
            <Text style={styles.postDescription}>
              <Text style={styles.makeBold}>{this.props.item.likes}</Text>
              {"\n"}
              <Text style={styles.makeBold}>{this.props.item.name}</Text>
              <Text> {this.props.item.quotes}</Text>
              <Text style={styles.makeTextLighter}>
                // FIXME: use padding or margin or flex if needed
                {"\n"}
                {this.props.item.comments}
                {"\n"}
              </Text>
            </Text>
          </View>
          {this.props.store.COMMENTS_ARRAY.map((data: any, index: number) => {
            return (
              <View style={styles.container} key={index}>
                <Text style={styles.makeBold}>{data.name}:</Text>
                <Text style={styles.comment}> {data.comment}</Text>
              </View>
            );
          })}
          {this.props.store.COMMENTS_ARRAY.map((data: any, index: number) => {
            return (
              <View style={styles.container} key={index}>
                <Text style={styles.makeBold}>{data.name}:</Text>
                <Text style={styles.comment}> {data.comment}</Text>
              </View>
            );
          })}
          <Text style={styles.makeTextLighter2}>{this.props.item.date}</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    position: "relative",
    top: 80,
    backgroundColor: "red",
    width: "100%",
    left: 0,
    right: 0
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
    top: 0,
    position: "relative",
    borderTopColor: "#fbfbfb",
    borderTopWidth: 1,
    //top: 0,
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
    top: 0,
    padding: 0,
    margin: 0,
    width: "100%",
    height: 400,
    marginTop: 0
  },
  scrollBar: {
    flex: 1,
    top: 73,
    height: "100%",
    width: "100%",
    paddingBottom: 30,
    // top: 0,
    left: 0,
    right: 0
  },
  detailContainer: {
    position: "absolute",
    marginLeft: 10,
    //marginLeft: 0,
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
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 8
  },
  tabBarInfoContainer4: {
    fontWeight: "bold",
    position: "absolute",
    marginTop: 0,
    top: 482,
    left: 0,
    right: 0,
    flex: 1,
    paddingLeft: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 8,
    margin: 0,
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
  makeTextLighter2: {
    fontWeight: "100",
    flex: 1,
    position: "relative",
    top: 80,
    paddingLeft: 10
  },
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
  postDescription: { paddingRight: 10, paddingLeft: 10 },
  container: {
    flexDirection: "row",
    top: 70,
    flex: 1,
    position: "relative",
    paddingLeft: 10,
    paddingRight: 20
  },
  comment: {
    width: "85%"
  },
  viewStyle: { backgroundColor: "white", top: 0, position: "relative" },
  image: { height: 400, width: 400 }
});
