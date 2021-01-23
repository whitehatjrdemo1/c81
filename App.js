import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import { AppTabNavigator } from "./components/AppTabNavigator";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import CustomSideBarMenu from "./components/CustomSideBarMenu";
export default function App() {
  return <AppContainer />;
}

const SwitchNavigator = createSwitchNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  Drawer: {
    screen: AppDrawerNavigator,
  },
});
const AppContainer = createAppContainer(SwitchNavigator);
