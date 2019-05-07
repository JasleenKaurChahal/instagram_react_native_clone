import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
export default class PostPageHeader extends React.Component<
  { navigation: any },
  any
> {
  // constructor(props: any) {
  //   super(props);
  //   this.handleBack = this.handleBack.bind(this);
  // }
  handleBack() {
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.tabBarInfoContainer}>
        <TouchableOpacity onPress={() => this.handleBack()}>
          <Ionicons
            name="ios-arrow-back"
            size={30}
            style={styles.arrowSymbol}
          />
        </TouchableOpacity>
        <Text style={styles.imageContainer}>Photo</Text>
        <MaterialCommunityIcons
          name="loop"
          size={25}
          style={styles.profileSymbol}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    paddingVertical: 40,
    marginBottom: 0,
    paddingBottom: 0
  },
  arrowSymbol: {
    paddingRight: 80
  },
  imageContainer: {
    paddingLeft: 50,
    width: 100,
    height: 25,
    fontSize: 20
    // marginTop: 10
  },

  profileSymbol: {
    // marginTop: 10,
    paddingLeft: 120
  }
});
