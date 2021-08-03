import React from "react";
import { Platform, StatusBar, Image } from "react-native";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./reduxs/index";

import AppNavigation from "./navigation/AppNavigation";
import RootNavigation from "./navigation/RootNavigation";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}
