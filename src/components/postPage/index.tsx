import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import PostPageHeader from "./PostPageHeader ";
import Post from "./Post";
import Store from "../../Store/Store";
export default class PostPage extends React.Component<any, any> {
  render() {
    // console.log("item is " + this.props.navigation.getParam("item"));
    // const item = this.props.navigation.getParam("item");
    // console.log("item is nme " + item.name);
    return (
      <View style={styles.container}>
        <PostPageHeader navigation={this.props.navigation} />
        <Post store={Store} item={this.props.navigation.getParam("item")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  scrollBar: {
    flex: 1,
    left: 0,
    right: 0
  }
});
