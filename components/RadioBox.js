import React from "react";
import { StyleSheet, View } from "react-native";

import Theme from "../constants/Theme";
import Images from "../constants/Images";

const RadioBox = ({
  viewContainer,
  viewChild,
  select = false,
  sizeContain = 30,
  sizeChild = 15,
  color_select,
}) => {
  return (
    <View
      style={[
        styles.defaultViewContainer,
        { width: sizeContain, height: sizeContain },
        select && { borderColor: color_select },
        viewContainer,
      ]}
    >
      <View
        style={[
          { width: sizeChild, height: sizeChild, borderRadius: sizeChild },
          select && { backgroundColor: color_select },
          viewChild,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultViewContainer: {
    borderWidth: 2,
    borderColor: Theme.COLORS.grey,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RadioBox;
