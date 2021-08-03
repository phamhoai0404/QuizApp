import React from "react";
import { ActivityIndicator } from "react-native";

import Theme from "../constants/Theme";
import ModalBox from "./ModalBox";

const Loading = ({ visible }) => {
  return (
    <ModalBox visible={visible}>
      <ActivityIndicator animating size="large" color={Theme.COLORS.main} />
    </ModalBox>
  );
};

export default Loading;
