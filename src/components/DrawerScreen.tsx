import * as React from "react";
import { NavigationActions } from "react-navigation";
import PropTypes, { any } from "prop-types";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { DrawerActions, createStackNavigator } from "react-navigation";
import {
  Feather,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
// import { DRAWER_OPTIONS } from "../Store/Store";
import EditPage from "./Edit/EditPage";
import { observer } from "mobx-react";
@observer
export default class DrawerScreen extends React.Component<any, any> {
  navigateToScreen = (route: any) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };
  // _onPressButton() {
  //   return <EditPage />;
  // }

  render() {
    //console.log("Navigation is " + this.props.navigation);
    return (
      <View>
        <ScrollView>
          {this.props.store.DRAWER_OPTIONS.map((option: any, index: number) => {
            // console.log(option.iconName);
            return (
              <View style={styles.container} key={index}>
                <View>
                  {option.iconFamily === "MaterialCommunityIcons" ? (
                    <MaterialCommunityIcons
                      name={option.iconName}
                      size={22}
                      style={styles.logoSymbol}
                    />
                  ) : (
                    <MaterialIcons
                      name={option.iconName}
                      size={22}
                      style={styles.logoSymbol}
                    />
                  )}
                </View>
                <Text style={styles.titleStyle}>{option.text}</Text>

                <Text>{"\n\n"}</Text>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.drawerFooter}>
          <Ionicons name="ios-settings" size={25} style={styles.logoSymbol} />
          {/* <TouchableOpacity> */}
          <TouchableOpacity
            onPress={
              () => this.props.navigation.navigate("Settings", { name: "Jane" })
              //this.props.navigation.navigate("Settings")

              //  this.props.navigation.navigate("EditPage")
            }
          >
            <Text style={styles.drawerFooterText}>Settings</Text>
          </TouchableOpacity>
          {/* <Text style={styles.drawerFooterText} onPress={_onPressButton}>
            Settings
          </Text> */}
        </View>
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
    width: "100%",
    top: 70,
    paddingLeft: 10
  },
  arrowSymbol: {
    color: "grey"
  },
  titleStyle: {
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: "300",
    width: "88%"
  },
  drawerFooter: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    top: 750,
    padding: 10
  },
  drawerFooterText: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: "300"
  }
});

// DrawerScreen.propTypes = {
//   navigation: PropTypes.object
// };
