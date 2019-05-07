import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// FIXME:
import { SearchBar } from "react-native";
// FIXME: add proptype
export default class SearchHeader extends React.Component<any, any> {
  state = {
    search: ""
  };
  // FIXME: add type for functions
  updateSearch = search => {
    this.setState({ search });
  };
  //submit = () => {};
  // constructor(props: any) {
  //   super(props);
  //   this.handleBack = this.handleBack.bind(this);
  // }
  // handleBack() {
  //   console.log(this.props.navigation, "navigation");
  //   this.props.navigation.goBack();
  // }
  render() {
    // FIXME:
    const { search } = "this".state;
    return (
      <View style={styles.tabBarInfoContainer}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />

        <Text style={styles.textStyle}>Settings</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabBarInfoContainer: {
    // flex: 1,
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // padding: 0,
    // backgroundColor: "green",
    // flexDirection: "row",
    // justifyContent: "flex-end",
    // alignItems: "flex-end"
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 40,
    marginBottom: 0,
    paddingBottom: 5
  },
  cameraSymbol: {
    paddingRight: 80
  },
  imageContainer: {
    paddingRight: 10,
    width: 100,
    height: 35
    // marginTop: 10
  },
  tvSymbol: {
    paddingLeft: 60
  },
  messageSymbol: {
    // marginTop: 10,
    paddingLeft: 15
  },
  textStyle: {
    fontWeight: "bold",
    paddingLeft: 20,
    fontSize: 15
  }
});
