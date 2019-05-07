import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import {
  MaterialIcons,
  SimpleLineIcons,
  Feather,
  Entypo,
  EvilIcons,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
//import { OPTIONS } from "../Store/Store";
import { observer, Observer } from "mobx-react";

@observer
export default class Header extends React.Component<{ store: any }, any> {
  render() {
    return (
      <View style={styles.tabBarInfoContainer}>
        {this.props.store.OPTIONS.map((option: any, index: number) => {
          // console.log(option.iconName);
          return (
            <View style={styles.container} key={index}>
              <MaterialIcons
                name={option.iconName}
                size={22}
                style={styles.logoSymbol}
              />
              <Text style={styles.titleStyle}>{option.text}</Text>

              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                style={styles.arrowSymbol}
              />
              <Text>{"\n\n"}</Text>
            </View>
          );
        })}
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
    top: 70,

    left: 0,
    right: 0,
    padding: 15,
    paddingTop: 12,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 40,
    marginBottom: 0,
    paddingBottom: 5
  },
  logoSymbol: {
    color: "black"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  },
  arrowSymbol: {
    color: "grey"
  },
  titleStyle: {
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "300",
    width: "88%"
  }
});
