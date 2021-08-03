import { useFormik } from "formik";
import { Block } from "galio-framework";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import ActionPassword from "../../../reduxs/User";

import styles from "./styles";
import {
  openAlert,
  resetScreen,
  validateChangePassword,
} from "../../../constants/utils";
import Theme from "../../../constants/Theme";
import { Text, TextInput } from "react-native";
import BackButton from "../../../components/BackButon";
import ButtonMain from "../../../components/ButtonMain";
import ErrorValidate from "../../../components/ErrorValidate";
import { useDispatch, useSelector } from "react-redux";

const ChangePass = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
      headerTitle: () => (
        <Text numberOfLines={1} style={styles.headerTitle}>
          Đổi mật khẩu
        </Text>
      ),
      headerRight: () => <Block />,
      headerStyle: [
        styles.headerStyle,
        { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
      ],
    });
  }, [navigation]);

  const formik = useFormik({
    initialValues: {
      new_password: "",
      re_new_password: "",
    },
    onSubmit: (values) => {
      dispatch(
        ActionPassword.ChangePasswordRequest(
          state.signin.data?.user?.id,
          values.new_password,
          () => {
            openAlert(
              dispatch,
              "Thông báo",
              "Cập nhật mật khẩu thành công. Vui lòng đăng nhập lại.",
              "Ok",
              () => {
                resetScreen(navigation, "Signin");
              }
            );
          }
        )
      );
    },
    validationSchema: validateChangePassword,
  });

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <Block style={styles.container}>
        <Block style={[styles.viewTipUsername, { marginTop: 15 }]}>
          <MaterialIcons
            name={"lock"}
            color={
              formik.values.new_password ? Theme.COLORS.main : Theme.COLORS.grey
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
        <Block style={[styles.viewTipUsername, { marginTop: 15 }]}>
          <MaterialIcons
            name={"lock"}
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
        <ButtonMain
          disabled={!formik.isValid}
          onPress={formik.handleSubmit}
          viewContainer={[
            styles.viewContainButtonNext,
            { width: "50%", alignSelf: "center" },
          ]}
          viewButton={[
            styles.viewButtonNext,
            !formik.isValid && { backgroundColor: Theme.COLORS.grey },
          ]}
        >
          <Text style={styles.txtButtonNext}>Tiếp theo</Text>
        </ButtonMain>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default ChangePass;
