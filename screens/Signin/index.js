import { Block, Text } from "galio-framework";
import React from "react";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFormik } from "formik";

// Actions
import ActionSignin from "../../reduxs/Signin";
// Styles
import styles from "./styles";
import Header from "../../components/Header";
import ButtonMain from "../../components/ButtonMain";
import Theme from "../../constants/Theme";
import { resetScreen, validateSignin } from "../../constants/utils";
import ErrorValidate from "../../components/ErrorValidate";

const Singup = ({ navigation }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      // username: "0000000001",
      // password: "password2",
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(
        ActionSignin.SigninRequest(values.username, values.password, () =>
          resetScreen(navigation, "TabMain")
        )
      );
    },
    validationSchema: validateSignin,
  });

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <Block style={styles.container}>
        <Header navigation={navigation} />
        <Block style={styles.viewForm}>
          <Block style={styles.viewFormChild}>
            <Text style={styles.txtTitleForm}>Đăng nhập</Text>
            <Block style={styles.viewTipUsername}>
              <MaterialIcons
                name="fingerprint"
                color={
                  formik.values.username ? Theme.COLORS.main : Theme.COLORS.grey
                }
                size={20}
              />
              <TextInput
                name="username"
                placeholder="Mã sinh viên"
                value={formik.values.username}
                onChangeText={formik.handleChange("username")}
                onBlur={formik.handleBlur("username")}
                style={styles.tipUsername}
              />
            </Block>
            <ErrorValidate
              value={formik.errors.username}
              touched={formik.touched.username}
            />
            <Block style={[styles.viewTipUsername, { marginTop: 15 }]}>
              <MaterialIcons
                name={"lock"}
                color={
                  formik.values.password ? Theme.COLORS.main : Theme.COLORS.grey
                }
                size={20}
              />
              <TextInput
                name="password"
                placeholder="Mật khẩu"
                value={formik.values.password}
                onChangeText={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                style={styles.tipUsername}
              />
            </Block>
            <ErrorValidate
              value={formik.errors.password}
              touched={formik.touched.password}
            />
            <ButtonMain
              viewButton={styles.btnForgot}
              onPress={() => navigation.navigate("ForgotPassStep1")}
              ripple_color={Theme.COLORS.grey}
            >
              <Text style={styles.txtForgot}>Quên mật khẩu</Text>
            </ButtonMain>
            <ButtonMain
              disabled={!formik.isValid}
              onPress={formik.handleSubmit}
              viewButton={styles.viewButtonLogin}
              viewContainer={[
                styles.viewContainButtonLogin,
                !formik.isValid && { backgroundColor: Theme.COLORS.grey },
              ]}
            >
              <Text style={styles.txtLogin}>Đăng nhập</Text>
            </ButtonMain>
          </Block>
        </Block>
        <Text style={styles.txtNotAccount}>
          Bạn chưa có tài khoản?
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ color: Theme.COLORS.main }}
          >
            {" "}
            ĐĂNG KÝ
          </Text>
        </Text>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default Singup;
