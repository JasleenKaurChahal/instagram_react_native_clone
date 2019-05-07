import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Header extends React.Component<{ navigation: any }, any> {
  //submit = () => {};
  constructor(props: any) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack() {
    console.log(this.props.navigation, "navigation");
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.tabBarInfoContainer}>
        <TouchableOpacity onPress={this.handleBack}>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={25}
            style={styles.cameraSymbol}
          />
        </TouchableOpacity>

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
