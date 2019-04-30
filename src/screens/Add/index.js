import React from "react";
import { StyleSheet, View, Text } from "react-native";
//import Home from "./src/screens/Home/index";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Add</Text>
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
  }
});
