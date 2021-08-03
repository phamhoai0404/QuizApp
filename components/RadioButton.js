import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "galio-framework";

import Theme from "../constants/Theme";
import RadioBox from "./RadioBox";
import ButtonMain from "./ButtonMain";

const RadioButton = ({
  viewContainer,
  viewContainerBox,
  viewChildBox,
  labelStyle,
  select = false,
  sizeContain = 30,
  sizeChild = 15,
  onPress,
  ripple_color = Theme.COLORS.faild,
  label = "",
  color_select = Theme.COLORS.main,
  disabled = false,
}) => {
  return (
    <ButtonMain
      viewButton={[styles.defaultViewContainer, viewContainer]}
      viewContainer={{ borderRadius: 5 }}
      android_ripple={{ color: ripple_color }}
      onPress={onPress}
      ripple_color={Theme.COLORS.grey}
      disabled={disabled}
    >
      <RadioBox
        select={select}
        sizeChild={sizeChild}
        sizeContain={sizeContain}
        viewChild={viewChildBox}
        viewContainer={viewContainerBox}
        color_select={color_select}
      />
      <Text
        style={[
          styles.txtLabel,
          select && { color: color_select },
          label.length && { marginLeft: 10 },
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </ButtonMain>
  );
};

const styles = StyleSheet.create({
  defaultViewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtLabel: {
    fontSize: 15,
    color: Theme.COLORS.grey,
  },
});

export default RadioButton;
