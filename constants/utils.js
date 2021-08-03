import { Platform, StatusBar, Dimensions } from "react-native";
import { theme } from "galio-framework";
import { put } from "@redux-saga/core/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as yup from "yup";

import ActionAlert from "../reduxs/Alert";
import ActionLoading from "../reduxs/Loading";
import { CommonActions } from "@react-navigation/routers";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const StatusHeight = StatusBar.currentHeight;
export const HeaderHeight = theme.SIZES.BASE * 4 + StatusHeight;
export const iPhoneX = () =>
  Platform.OS === "ios" && (height === 812 || width === 812);

export function openAlert(dispatch, title, body, txtOk, onPressOk) {
  dispatch(ActionAlert.UpdateVisibleAlert(true));
  title && dispatch(ActionAlert.UpdateTitleAlert(title));
  body && dispatch(ActionAlert.UpdateBodyAlert(body));
  txtOk && dispatch(ActionAlert.UpdateTxtokAlert(txtOk));
  onPressOk && dispatch(ActionAlert.UpdateOnpressokAlert(onPressOk));
}
export function openAlertSaga(error) {
  let arr = [];
  arr.push(put(ActionAlert.UpdateVisibleAlert(true)));
  arr.push(put(ActionAlert.UpdateBodyAlert(error)));
  return arr;
}
export function closeAlert(dispatch) {
  dispatch(ActionAlert.UpdateVisibleAlert(false));
}

export function openLoading(dispatch) {
  dispatch(ActionLoading.UpdateVisibleLoading(true));
}
export function openLoadingSaga() {
  let arr = [];
  arr.push(put(ActionLoading.UpdateVisibleLoading(true)));
  return arr;
}
export function closeLoadingSaga() {
  let arr = [];
  arr.push(put(ActionLoading.UpdateVisibleLoading(false)));
  return arr;
}
export function closeLoading(dispatch) {
  dispatch(ActionLoading.UpdateVisibleLoading(false));
}

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log("error save storage", error);
  }
};

export const removeStoreData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("error remove storage", error);
  }
};

export const validateSignin = yup.object().shape({
  username: yup
    .string()
    .matches(/^[0-9]+$/, "Mã sinh viên phải là số")
    .length(10, ({ length }) => `Mã sinh viên phải có độ dài bằng ${length}`)
    .required("Vui lòng nhập mã sinh viên"),
  password: yup
    .string()
    .min(8, ({ min }) => `Mật khẩu phải có ít nhất ${min} ký tự`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Mật khẩu phải có ít nhất một chữ cái và một số"
    )
    .required("Vui lòng nhập mật khẩu"),
});
export const validateSignup = yup.object().shape({
  fullName: yup.string().required("Vui lòng nhập họ tên"),
  username: yup
    .string()
    .matches(/^[0-9]+$/, "Mã sinh viên phải là số")
    .length(10, ({ length }) => `Mã sinh viên phải có độ dài bằng ${length}`)
    .required("Vui lòng nhập mã sinh viên"),
  phonenumber: yup
    .string()
    .matches(/^[0-9]+$/, "Số điện thoại phải là số")
    .required("Vui lòng nhập số điện thoại"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: yup
    .string()
    .min(8, ({ min }) => `Mật khẩu phải có ít nhất ${min} ký tự`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Mật khẩu phải có ít nhất một chữ cái và một số"
    )
    .required("Vui lòng nhập mật khẩu"),
  re_password: yup
    .string()
    .required("Vui lòng nhập lại mật khẩu")
    .oneOf([yup.ref("password"), null], "Nhập lại mật khẩu không khớp"),
});
export const validateUserInfor = yup.object().shape({
  fullname: yup.string().required("Vui lòng nhập họ tên"),
  phonenumber: yup
    .string()
    .matches(/^[0-9]+$/, "Số điện thoại phải là số")
    .required("Vui lòng nhập số điện thoại"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
});

export const validateChangePassword = yup.object().shape({
  new_password: yup
    .string()
    .min(8, ({ min }) => `Mật khẩu phải có ít nhất ${min} ký tự`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Mật khẩu phải có ít nhất một chữ cái và một số"
    )
    .required("Vui lòng nhập mật khẩu"),
  re_new_password: yup
    .string()
    .required("Vui lòng nhập lại mật khẩu")
    .oneOf([yup.ref("new_password"), null], "Nhập lại mật khẩu không khớp"),
});

export const validateEmail = yup.object().shape({
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
});

export function resetScreen(navigation, screen) {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name: screen }],
    })
  );
}
