import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import EditHeader from "./EditHeader";
import EditOptions from "./EditOptions";
import EditFooter from "./EditFooter";
import Store from "../../Store/Store";
export default class EditPage extends React.Component<any, any> {
  render() {
    console.log("Edit Page " + this.props.navigation);
    return (
      <View>
        <EditHeader navigation={this.props.navigation} />
        <EditOptions store={Store} />
        <EditFooter />
      </View>
    );
  }
}
