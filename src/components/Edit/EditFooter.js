import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Linking
} from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.textStyle}>Logins{"\n\n"}</Text>
        <Text
          style={styles.subtext}
          onPress={() => {
            Linking.openURL("https://google.com");
          }}
        >
          Add Account{"\n\n"}
        </Text>
        <Text
          style={styles.subtext}
          onPress={() => {
            Linking.openURL("https://google.com");
          }}
        >
          Log out of jazz_2317
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: "absolute",
    top: 490,
    right: 0,
    left: 0,
    padding: 10,
    paddingTop: 20,
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 40,
    marginBottom: 0,
    paddingBottom: 5,
    borderWidth: 0.5,
    alignItems: "flex-start",
    borderColor: "white",
    borderTopColor: "grey"
  },
  cameraSymbol: {
    paddingRight: 80
  },

  textStyle: {
    fontWeight: "bold",
    paddingLeft: 20,
    fontSize: 15
  },
  subtext: {
    color: "blue",
    paddingLeft: 20,
    fontSize: 15
  }
});
