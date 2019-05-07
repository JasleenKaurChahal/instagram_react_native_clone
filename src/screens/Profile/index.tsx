import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import ProfileHeader from "../../components/ProfileFolder/ProfileHeader";
import ProfileSection from "../../components/ProfileFolder/ProfileSection";
import ProfileTabSection from "../../components/ProfileFolder/ProfileTabSection";
import Store from "../../Store/Store";
export default class Profile extends React.Component<any, any> {
  render() {
    console.log(
      "Profile page navigation " +
        JSON.stringify(this.props.screenProps.rootNavigation)
    );
    return (
      <View style={styles.container}>
        <ProfileHeader navigation={this.props.screenProps.rootNavigation} />
        <ProfileSection />
        <View style={styles.profileTabContainer}>
          <ProfileTabSection
            store={Store}
            navigation={this.props.screenProps.rootNavigation}
          />
        </View>
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
  },
  profileTabContainer: {
    position: "relative",
    top: 95
  }
});
