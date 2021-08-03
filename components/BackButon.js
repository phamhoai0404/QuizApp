import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Theme from "../constants/Theme";
import ButtonMain from "./ButtonMain";

const BackButton = ({ navigation }) => {
  return (
    <ButtonMain
      viewContainer={{
        width: 50,
        height: 50,
        borderRadius: 50,
      }}
      viewButton={{ justifyContent: "center", alignItems: "center" }}
      onPress={() => {
        navigation.goBack();
      }}
      ripple_color={Theme.COLORS.grey}
    >
      <FontAwesome5 name="chevron-left" size={24} color={Theme.COLORS.white} />
    </ButtonMain>
  );
};

const styles = StyleSheet.create({});

export default BackButton;
