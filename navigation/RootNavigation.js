import React from "react";

import AppNavigation from "./AppNavigation";
import Alert from "../components/Alert";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

const RootNavigation = () => {
  const state = useSelector((state) => state);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <AppNavigation />
      <Alert
        visible={state.alert.visible}
        title={state.alert.title}
        body={state.alert.body}
        onPressOK={state.alert.onPressOk}
      />
      <Loading visible={state.loading.visible} />
    </SafeAreaView>
  );
};

export default RootNavigation;
