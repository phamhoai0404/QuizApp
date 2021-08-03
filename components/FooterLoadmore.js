import React from "react";
import { ActivityIndicator, View } from "react-native";

import Theme from "../constants/Theme";

const FooterLoadmore = ({}) => {
  return (
    <View style={{ width: "100%" }}>
      <ActivityIndicator animating size="large" color={Theme.COLORS.main} />
    </View>
  );
};

export default FooterLoadmore;
