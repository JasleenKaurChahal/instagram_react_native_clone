import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

// FIXME: add proptypes if needed
export default class Activity extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Activity</Text>
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
