import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/HomeScreenComponents/Header";
import StoriesSection from "../../components/HomeScreenComponents/StoriesSection";
import NewsFeed from "../../components/NewsFeed";
import Store from "../../Store/Store";
import { observable } from "mobx";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <StoriesSection store={Store} />
        <View style={styles.newsFeedConatiner}>
          <NewsFeed store={Store} />
        </View>
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
  newsFeedConatiner: {
    top: 200
  }
});
