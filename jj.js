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
const win = Dimensions.get("window");

export default class Home extends React.Component {
  render() {
    let pic = {
      uri: "http://hanatemplate.com/images/font-on-instagram-1.png"
    };
    let storyPic = {
      uri: "https://app.instarocket.co/Content/profile/1.png"
    };
    let scrollPic1 = {
      uri:
        "http://mediad.publicbroadcasting.net/p/kwit/files/styles/large/public/201804/mwg_.jpg"
    };
    let scrollPic2 = {
      uri: "https://i.ytimg.com/vi/u4ZKVXoGe2w/maxresdefault.jpg"
    };
    let scrollPic3 = {
      uri:
        "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMC82Mjkvb3JpZ2luYWwvc2F1c2FnZS1tZXJnZXIuanBn"
    };
    let scrollPic4 = {
      uri: "https://i.ytimg.com/vi/EsS-tu12Z_4/maxresdefault.jpg"
    };
    let scrollPic5 = {
      uri:
        "https://www.nasa.gov/sites/default/files/thumbnails/image/potw1722a.jpg"
    };
    let scrollPic6 = {
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprOPj_sG6Ui3H-b3OGa-gCwIuTcEX0RBgSc-o6Z_m9CX5iH55"
    };
    let scrollPic7 = {
      uri:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    };

    let savedPic = {
      uri:
        "https://image.shutterstock.com/z/stock-vector-save-or-pin-post-icon-636479762.jpg"
    };
    return (
      <View style={styles.container}>
        <View style={styles.tabBarInfoContainer}>
          <SimpleLineIcons
            name="camera"
            size={25}
            style={styles.cameraSymbol}
          />
          <Image source={pic} style={styles.imageContainer} />
          <Feather name="tv" size={25} style={styles.tvSymbol} />
          <Entypo name="paper-plane" size={25} style={styles.messageSymbol} />
        </View>

        <View style={styles.bodySection}>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <Image source={storyPic} style={styles.storyContainer} />
            <Text>Galaxy</Text>
          </View>
          <Image source={storyPic} style={styles.storyContainer} />
          <Image source={storyPic} style={styles.storyContainer} />
          <Image source={storyPic} style={styles.storyContainer} />
          <Image source={storyPic} style={styles.storyContainer} />
          <Image source={storyPic} style={styles.storyContainer} />
        </View>
        <View
          style={{
            flexDirection: "row",
            top: 50,
            alignItems: "center",
            width: 400
          }}
        >
          <Text>Galaxy{"             "}</Text>
          <Text>Stars{"              "}</Text>
          <Text>Planet{"           "}</Text>
          <Text>Universe{"        "}</Text>
          <Text>Milkyway </Text>
          <Text>{"\n"}</Text>
        </View>

        <ScrollView style={styles.scrollBar}>
          <View style={styles.description}>
            <View style={styles.tabBarInfoContainer2}>
              <Image source={storyPic} style={styles.detailContainer} />
              <Text style={styles.detailProfile}>Galaxy</Text>
              <Entypo name="dots-three-horizontal" style={styles.dotsSymbol} />
            </View>
            <Image source={scrollPic1} style={styles.feedContainer} />
            <View style={styles.tabBarInfoContainer3}>
              <Ionicons
                name="md-heart-empty"
                style={{ paddingRight: 10 }}
                size={30}
              />
              <FontAwesome
                name="comment-o"
                style={{ paddingRight: 10 }}
                size={25}
              />
              <Entypo name="paper-plane" size={25} />

              <Image source={savedPic} style={styles.savedContainer} />
            </View>
            <View style={styles.tabBarInfoContainer4}>
              <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontWeight: "bold" }}>230 likes</Text>
                {"\n"}

                <Text style={{ fontWeight: "bold" }}>Galaxy</Text>
                <Text>
                  {"  "}
                  Appreciate what you have before it turns into what you had!
                </Text>
                <Text style={{ fontWeight: "100" }}>
                  {"\n"}
                  View all 20 comments
                  {"\n"}
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.description}>
            <View style={styles.tabBarInfoContainer2}>
              <Image source={storyPic} style={styles.detailContainer} />
              <Text style={styles.detailProfile}>Galaxy</Text>
              <Entypo name="dots-three-horizontal" style={styles.dotsSymbol} />
            </View>
            <Image source={scrollPic2} style={styles.feedContainer} />
            <View style={styles.tabBarInfoContainer3}>
              <Ionicons
                name="md-heart-empty"
                style={{ paddingRight: 10 }}
                size={30}
              />
              <FontAwesome
                name="comment-o"
                style={{ paddingRight: 10 }}
                size={25}
              />
              <Entypo name="paper-plane" size={25} />

              <Image source={savedPic} style={styles.savedContainer} />
            </View>
            <View style={styles.tabBarInfoContainer4}>
              <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontWeight: "bold" }}>130 likes</Text>
                {"\n"}

                <Text style={{ fontWeight: "bold" }}>Galaxy</Text>
                <Text>
                  {"  "}
                  Joy in exploring!!
                </Text>
                <Text style={{ fontWeight: "100" }}>
                  {"\n"}
                  View all 10 comments
                  {"\n"}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.tabBarInfoContainer2}>
              <Image source={storyPic} style={styles.detailContainer} />
              <Text style={styles.detailProfile}>Galaxy</Text>
              <Entypo name="dots-three-horizontal" style={styles.dotsSymbol} />
            </View>
            <Image source={scrollPic3} style={styles.feedContainer} />
            <View style={styles.tabBarInfoContainer3}>
              <Ionicons
                name="md-heart-empty"
                style={{ paddingRight: 10 }}
                size={30}
              />
              <FontAwesome
                name="comment-o"
                style={{ paddingRight: 10 }}
                size={25}
              />
              <Entypo name="paper-plane" size={25} />

              <Image source={savedPic} style={styles.savedContainer} />
            </View>
            <View style={styles.tabBarInfoContainer4}>
              <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontWeight: "bold" }}>200 likes</Text>
                {"\n"}

                <Text style={{ fontWeight: "bold" }}>Galaxy</Text>
                <Text>
                  {"  "}
                  Appreciate what you have before it turns into what you had!
                </Text>
                <Text style={{ fontWeight: "100" }}>
                  {"\n"}
                  View all 20 comments
                  {"\n"}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.tabBarInfoContainer2}>
              <Image source={storyPic} style={styles.detailContainer} />
              <Text style={styles.detailProfile}>Galaxy</Text>
              <Entypo name="dots-three-horizontal" style={styles.dotsSymbol} />
            </View>
            <Image source={scrollPic4} style={styles.feedContainer} />
            <View style={styles.tabBarInfoContainer3}>
              <Ionicons
                name="md-heart-empty"
                style={{ paddingRight: 10 }}
                size={30}
              />
              <FontAwesome
                name="comment-o"
                style={{ paddingRight: 10 }}
                size={25}
              />
              <Entypo name="paper-plane" size={25} />

              <Image source={savedPic} style={styles.savedContainer} />
            </View>
            <View style={styles.tabBarInfoContainer4}>
              <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontWeight: "bold" }}>230 likes</Text>
                {"\n"}

                <Text style={{ fontWeight: "bold" }}>Galaxy</Text>
                <Text>
                  {"  "}
                  Appreciate what you have before it turns into what you had!
                </Text>
                <Text style={{ fontWeight: "100" }}>
                  {"\n"}
                  View all 20 comments
                  {"\n"}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.tabBarInfoContainer2}>
              <Image source={storyPic} style={styles.detailContainer} />
              <Text style={styles.detailProfile}>Galaxy</Text>
              <Entypo name="dots-three-horizontal" style={styles.dotsSymbol} />
            </View>
            <Image source={scrollPic5} style={styles.feedContainer} />
            <View style={styles.tabBarInfoContainer3}>
              <Ionicons
                name="md-heart-empty"
                style={{ paddingRight: 10 }}
                size={30}
              />
              <FontAwesome
                name="comment-o"
                style={{ paddingRight: 10 }}
                size={25}
              />
              <Entypo name="paper-plane" size={25} />

              <Image source={savedPic} style={styles.savedContainer} />
            </View>
            <View style={styles.tabBarInfoContainer4}>
              <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontWeight: "bold" }}>230 likes</Text>
                {"\n"}

                <Text style={{ fontWeight: "bold" }}>Galaxy</Text>
                <Text>
                  {"  "}
                  Appreciate what you have before it turns into what you had!
                </Text>
                <Text style={{ fontWeight: "100" }}>
                  {"\n"}
                  View all 20 comments
                  {"\n"}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.tabBarInfoContainer2}>
              <Image source={storyPic} style={styles.detailContainer} />
              <Text style={styles.detailProfile}>Galaxy</Text>
              <Entypo name="dots-three-horizontal" style={styles.dotsSymbol} />
            </View>
            <Image source={scrollPic6} style={styles.feedContainer} />
            <View style={styles.tabBarInfoContainer3}>
              <Ionicons
                name="md-heart-empty"
                style={{ paddingRight: 10 }}
                size={30}
              />
              <FontAwesome
                name="comment-o"
                style={{ paddingRight: 10 }}
                size={25}
              />
              <Entypo name="paper-plane" size={25} />

              <Image source={savedPic} style={styles.savedContainer} />
            </View>
            <View style={styles.tabBarInfoContainer4}>
              <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontWeight: "bold" }}>230 likes</Text>
                {"\n"}

                <Text style={{ fontWeight: "bold" }}>Galaxy</Text>
                <Text>
                  {"  "}
                  Appreciate what you have before it turns into what you had!
                </Text>
                <Text style={{ fontWeight: "100" }}>
                  {"\n"}
                  View all 20 comments
                  {"\n"}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <View style={styles.tabBarInfoContainer2}>
              <Image source={storyPic} style={styles.detailContainer} />
              <Text style={styles.detailProfile}>Galaxy</Text>
              <Entypo name="dots-three-horizontal" style={styles.dotsSymbol} />
            </View>
            <Image source={scrollPic7} style={styles.feedContainer} />
            <View style={styles.tabBarInfoContainer3}>
              <Ionicons
                name="md-heart-empty"
                style={{ paddingRight: 10 }}
                size={30}
              />
              <FontAwesome
                name="comment-o"
                style={{ paddingRight: 10 }}
                size={25}
              />
              <Entypo name="paper-plane" size={25} />

              <Image source={savedPic} style={styles.savedContainer} />
            </View>
            <View style={styles.tabBarInfoContainer4}>
              <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontWeight: "bold" }}>230 likes</Text>
                {"\n"}

                <Text style={{ fontWeight: "bold" }}>Galaxy</Text>
                <Text>
                  {"  "}
                  Appreciate what you have before it turns into what you had!
                </Text>
                <Text style={{ fontWeight: "100" }}>
                  {"\n"}
                  View all 20 comments
                  {"\n"}
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
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
    width: win.width,
    height: 400,
    marginTop: 0
  },
  scrollBar: {
    top: 70,
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
    position: "absolute",
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
    borderTopColor: "#fbfbfb",
    top: 26,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20
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

    justifyContent: "space-between",
    alignItems: "center"
  },

  savedContainer: {
    height: 40,
    width: 40,
    marginRight: 10,
    marginLeft: 215,
    alignItems: "center"
  },
  description: {}
});
























































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
const win = Dimensions.get("window");

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //pictureArray: ["ab", "cd", "ef"]
      pictureArray:[ `http://mediad.publicbroadcasting.net/p/kwit/files/styles/large/public/201804/mwg_.jpg`,
      `https://i.ytimg.com/vi/u4ZKVXoGe2w/maxresdefault.jpg`,
      `https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwMC82Mjkvb3JpZ2luYWwvc2F1c2FnZS1tZXJnZXIuanBn`,
      `https://i.ytimg.com/vi/EsS-tu12Z_4/maxresdefault.jpg`,
      `https://www.nasa.gov/sites/default/files/thumbnails/image/potw1722a.jpg`,
      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprOPj_sG6Ui3H-b3OGa-gCwIuTcEX0RBgSc-o6Z_m9CX5iH55`,
      `https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`]
    };
  }
  render() {
    let storyPic = {
      uri: "https://app.instarocket.co/Content/profile/1.png"
    };

    let savedPic = {
      uri:
        "https://image.shutterstock.com/z/stock-vector-save-or-pin-post-icon-636479762.jpg"
    };

    return (
      <ScrollView style={styles.scrollBar}>
        {this.state.pictureArray.map((item) => {
         console.log(item);
          <View style={styles.description}>
            <View style={styles.tabBarInfoContainer2}>
              <Image source={storyPic} style={styles.detailContainer} />
              <Text style={styles.detailProfile}>Galaxy</Text>
              <Entypo name="dots-three-horizontal" style={styles.dotsSymbol} />
            </View>
            <Image source={uri:item} style={styles.feedContainer} />
            <View style={styles.tabBarInfoContainer3}>
              <Ionicons
                name="md-heart-empty"
                style={{ paddingRight: 10 }}
                size={30}
              />
              <FontAwesome
                name="comment-o"
                style={{ paddingRight: 10 }}
                size={25}
              />
              <Entypo name="paper-plane" size={25} />

              <Image source={savedPic} style={styles.savedContainer} />
            </View>
            <View style={styles.tabBarInfoContainer4}>
              <Text style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontWeight: "bold" }}>230 likes</Text>
                {"\n"}

                <Text style={{ fontWeight: "bold" }}>Galaxy</Text>
                <Text>
                  {"  "}
                  Appreciate what you have before it turns into what you had!
                </Text> 
                <Text style={{ fontWeight: "100" }}>
                  {"\n"}
                  View all 20 comments
                  {"\n"}
                </Text>
              </Text>
            </View>
          </View>
        })}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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
    top: 200,
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
    position: "absolute",
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
    borderTopColor: "#fbfbfb",
    top: 26,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20
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

    justifyContent: "space-between",
    alignItems: "center"
  },

  savedContainer: {
    height: 40,
    width: 40,
    marginRight: 10,
    marginLeft: 215,
    alignItems: "center"
  },
  description: {}
});
