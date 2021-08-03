import { Block, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

// Actions
import ActionUser from "../../../../reduxs/User";

// Styles
import styles from "./styles";
import ButtonMain from "../../../../components/ButtonMain";
import Header from "../../../../components/Header";
import Theme from "../../../../constants/Theme";
import { useFormik } from "formik";
import {
  openAlert,
  resetScreen,
  validateChangePassword,
} from "../../../../constants/utils";
import ErrorValidate from "../../../../components/ErrorValidate";

const ForgotPassStep3 = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  function apiResetPassord(password) {
    dispatch(
      ActionUser.ResetPasswordRequest(token, password, () => {
        openAlert(
          dispatch,
          "Thông báo",
          "Cập nhật mật khẩu thành công. Vui lòng đăng nhập để tiếp tục.",
          "Ok",
          () => resetScreen(navigation, "Signin")
        );
      })
    );
  }

  const formik = useFormik({
    initialValues: {
      new_password: "",
      re_new_password: "",
    },
    onSubmit: (values) => apiResetPassord(values.new_password),
    validationSchema: validateChangePassword,
  });

  return (
    <Block style={styles.container}>
      <Header navigation={navigation} back={true} />
      <Block style={styles.viewForm}>
        <Text style={styles.txtTitleForm}>Quên mật khẩu</Text>
        <Block style={styles.viewFormChild}>
          <Block style={styles.viewTipUsername}>
            <MaterialIcons
              name="code"
              color={token ? Theme.COLORS.main : Theme.COLORS.grey}
              size={20}
            />
            <TextInput
              placeholder="Mã nhận từ email"
              value={token}
              onChangeText={(text) => setToken(text)}
              style={styles.tipUsername}
            />
          </Block>
          <Block style={styles.viewTipUsername}>
            <MaterialIcons
              name="lock"
              color={
                formik.values.new_password
                  ? Theme.COLORS.main
                  : Theme.COLORS.grey
              }
              size={20}
            />
            <TextInput
              name="new_password"
              placeholder="Mật khẩu mới"
              value={formik.values.new_password}
              onChangeText={formik.handleChange("new_password")}
              onBlur={formik.handleBlur("new_password")}
              style={styles.tipUsername}
            />
          </Block>
          <ErrorValidate
            value={formik.errors.new_password}
            touched={formik.touched.new_password}
          />
          <Block style={styles.viewTipUsername}>
            <MaterialIcons
              name="lock"
              color={
                formik.values.re_new_password
                  ? Theme.COLORS.main
                  : Theme.COLORS.grey
              }
              size={20}
            />
            <TextInput
              name="re_new_password"
              placeholder="Nhập lại mật khẩu mới"
              value={formik.values.re_new_password}
              onChangeText={formik.handleChange("re_new_password")}
              onBlur={formik.handleBlur("re_new_password")}
              style={styles.tipUsername}
            />
          </Block>
          <ErrorValidate
            value={formik.errors.re_new_password}
            touched={formik.touched.re_new_password}
          />
        </Block>
      </Block>
      <ButtonMain
        disabled={!formik.isValid}
        onPress={formik.handleSubmit}
        viewContainer={[
          styles.viewContainButtonNext,
          { width: "72.25%", alignSelf: "center" },
        ]}
        viewButton={[
          styles.viewButtonNext,
          !formik.isValid && { backgroundColor: Theme.COLORS.grey },
        ]}
      >
        <Text style={styles.txtButtonNext}>Tiếp theo</Text>
      </ButtonMain>
    </Block>
  );
};

export default ForgotPassStep3;
