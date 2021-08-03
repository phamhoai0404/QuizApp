import React from "react";
import { Text } from "react-native";
import Theme from "../constants/Theme";

const ErrorValidate = ({ value, touched }) => {
  if (value && touched)
    return (
      <Text
        style={{
          fontSize: 10,
          color: Theme.COLORS.red,
          fontWeight: "bold",
          marginLeft: 3,
          marginTop: 3,
        }}
      >
        {value}
      </Text>
    );
  return null;
};

export default ErrorValidate;
