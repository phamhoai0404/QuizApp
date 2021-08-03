import React from "react";
import { StyleSheet, Platform, Pressable, View } from "react-native";

import Theme from "../constants/Theme";

const ButtonMain = ({
  viewContainer,
  viewButton,
  children,
  onPress,
  ripple_color = Theme.COLORS.grey,
  disabled = false,
  onLayout,
}) => {
  return (
    <View style={[styles.defaultViewContainer, viewContainer]}>
      <Pressable
        style={[styles.defaultViewButton, viewButton]}
        android_ripple={{ color: ripple_color }}
        onPress={onPress}
        disabled={disabled}
        onLayout={onLayout}
      >
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultViewContainer: {
    overflow: "hidden",
  },
  defaultViewButton: {
    flex: 1,
  },
});

export default ButtonMain;
