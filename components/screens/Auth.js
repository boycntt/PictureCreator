import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  AlertButton,
} from "react-native";
import GetApis from "../util/api";

export default class Auth extends Component {
  constructor(props) {
    super(props);
  }

  _login = async () => {
    let res = await GetApis(
      "Account",
      "Login",
      {
        appid: "351A66D7-9640-442D-9DAB-69DA59631F06",
        username: "tuannt2",
        password: "123456",
        deviceinfo: "",
      },
      10000
    );
    Alert.alert(
      "Thông báo",
      `Xin chào ${res.FullName} - ${res.costcenter}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <View styles={styles.container}>
        <View style={styles.topPannel}>
          <Pressable
            onPress={() => {
              this._login();
            }}
          >
            <Text>I'm pressable!</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topPannel: {
    height: "50%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  bottPannel: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
