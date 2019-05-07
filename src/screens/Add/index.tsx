import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import PostPage from "../../components/postPage/index";

// FIXME: add proptypes if needed
export default class Add extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add</Text>
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
