import { Block } from "galio-framework";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { resetScreen } from "../../constants/utils";

import ActionSignin from "../../reduxs/Signin";

// Styles
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";

const Splash = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const data = await AsyncStorage.getItem("token");
    if (data !== null) {
      dispatch(ActionSignin.SigninSuccess(JSON.parse(data)));
      resetScreen(navigation, "TabMain");
    } else {
      resetScreen(navigation, "Signin");
    }
  };

  return null;
};

export default Splash;
