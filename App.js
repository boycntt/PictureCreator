import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Auth from "./components/screens/Auth";
import Login from "./components/screens/Login";
import Home from "./components/screens/Home";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{
            title: "Authorize screen",
            headerShown: false,
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home screen",
            headerShown: true,
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTouch: {
    backgroundColor: "#7a110a",
  },
});
