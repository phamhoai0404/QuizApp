import { Block, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

// Actions
import ActionUser from "../../../../reduxs/User";

// Styles
import styles from "./styles";
import Header from "../../../../components/Header";
import Theme from "../../../../constants/Theme";
import ButtonMain from "../../../../components/ButtonMain";
import { useFormik } from "formik";
import { validateEmail } from "../../../../constants/utils";
import ErrorValidate from "../../../../components/ErrorValidate";

const ForgotPassStep1 = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function apiForgotPassord(email) {
    dispatch(
      ActionUser.ForgotPasswordRequest(email, () => {
        navigation.navigate("ForgotPassStep3");
      })
    );
  }

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => apiForgotPassord(values.email),
    validationSchema: validateEmail,
  });

  return (
    <Block style={styles.container}>
      <Header navigation={navigation} back={true} />
      <Block style={styles.viewForm}>
        <Text style={styles.txtTitleForm}>Quên mật khẩu</Text>
        <Text style={styles.txtSubtitleForm}>
          Vui lòng nhập email của bạn để tiếp tục.
        </Text>
        <Block style={styles.viewFormChild}>
          <Block style={styles.viewTipUsername}>
            <MaterialIcons
              name="email"
              color={
                formik.values.email ? Theme.COLORS.main : Theme.COLORS.grey
              }
              size={20}
            />
            <TextInput
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              style={styles.tipUsername}
            />
          </Block>
          <ErrorValidate
            value={formik.errors.email}
            touched={formik.touched.email}
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

export default ForgotPassStep1;
