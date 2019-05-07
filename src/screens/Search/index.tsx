import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchHeader from "../../components/SearchComponents/SearchHeader";
import { SearchBar } from "react-native-elements";
export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchHeader />
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
