import { Block, Text } from "galio-framework";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useFormik } from "formik";

// Actions
import ActionSignin from "../../reduxs/Signin";
// Styles
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ButtonMain from "../../components/ButtonMain";
import RadioButton from "../../components/RadioButton";
import Theme from "../../constants/Theme";
import { resetScreen, validateSignup } from "../../constants/utils";
import ErrorValidate from "../../components/ErrorValidate";

const Signin = ({ navigation }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [gender, setGender] = useState("male");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      phonenumber: "",
      email: "",
      password: "",
      re_password: "",
    },
    onSubmit: (values) => {
      dispatch(
        ActionSignin.SignupRequest(
          values.fullName,
          values.username,
          values.phonenumber,
          values.email,
          values.password,
          gender == "male" ? "nam" : "nữ",
          () => {
            resetScreen(navigation, "Signin");
          }
        )
      );
    },
    validationSchema: validateSignup,
  });

  const dataItem = [
    {
      name: "fullName",
      placeholder: "Họ tên",
      value: formik.values.fullName,
      handleChange: formik.handleChange("fullName"),
      handleBlur: formik.handleBlur("fullName"),
      errorValidate: (
        <ErrorValidate
          value={formik.errors.fullName}
          touched={formik.touched.fullName}
        />
      ),
      icon: (
        <FontAwesome
          name={"user-circle-o"}
          color={formik.values.fullName ? Theme.COLORS.main : Theme.COLORS.grey}
          size={20}
        />
      ),
      keyboardType: "default",
    },
    {
      name: "username",
      placeholder: "Mã sinh viên",
      value: formik.values.username,
      handleChange: formik.handleChange("username"),
      handleBlur: formik.handleBlur("username"),
      errorValidate: (
        <ErrorValidate
          value={formik.errors.username}
          touched={formik.touched.username}
        />
      ),
      icon: (
        <MaterialIcons
          name={"fingerprint"}
          color={formik.values.username ? Theme.COLORS.main : Theme.COLORS.grey}
          size={20}
        />
      ),
      keyboardType: "number-pad",
    },
    {
      name: "phonenumber",
      placeholder: "Số điện thoại",
      value: formik.values.phonenumber,
      handleChange: formik.handleChange("phonenumber"),
      handleBlur: formik.handleBlur("phonenumber"),
      errorValidate: (
        <ErrorValidate
          value={formik.errors.phonenumber}
          touched={formik.touched.phonenumber}
        />
      ),
      icon: (
        <MaterialIcons
          name={"phone"}
          color={
            formik.values.phonenumber ? Theme.COLORS.main : Theme.COLORS.grey
          }
          size={20}
        />
      ),
      keyboardType: "number-pad",
    },
    {
      name: "email",
      placeholder: "Email",
      value: formik.values.email,
      handleChange: formik.handleChange("email"),
      handleBlur: formik.handleBlur("email"),
      errorValidate: (
        <ErrorValidate
          value={formik.errors.email}
          touched={formik.touched.email}
        />
      ),
      icon: (
        <MaterialIcons
          name={"email"}
          color={formik.values.email ? Theme.COLORS.main : Theme.COLORS.grey}
          size={20}
        />
      ),
      keyboardType: "email-address",
    },
    {
      name: "password",
      placeholder: "Mật khẩu",
      value: formik.values.password,
      handleChange: formik.handleChange("password"),
      handleBlur: formik.handleBlur("password"),
      errorValidate: (
        <ErrorValidate
          value={formik.errors.password}
          touched={formik.touched.password}
        />
      ),
      icon: (
        <MaterialIcons
          name={"lock"}
          color={formik.values.password ? Theme.COLORS.main : Theme.COLORS.grey}
          size={20}
        />
      ),
      keyboardType: "default",
    },
    {
      name: "re_password",
      placeholder: "Nhập lại mật khẩu",
      value: formik.values.re_password,
      handleChange: formik.handleChange("re_password"),
      handleBlur: formik.handleBlur("re_password"),
      errorValidate: (
        <ErrorValidate
          value={formik.errors.re_password}
          touched={formik.touched.re_password}
        />
      ),
      icon: (
        <MaterialIcons
          name={"lock"}
          color={
            formik.values.re_password ? Theme.COLORS.main : Theme.COLORS.grey
          }
          size={20}
        />
      ),
      keyboardType: "default",
    },
  ];

  const renderItemInput = () =>
    dataItem.map((item, index) => (
      <Block key={String(index)}>
        <Block style={styles.viewTipUsername}>
          {item.icon}
          <TextInput
            name={item.name}
            placeholder={item.placeholder}
            value={item.value}
            onChangeText={item.handleChange}
            onBlur={item.handleBlur}
            style={styles.tipUsername}
            keyboardType={item.keyboardType}
          />
        </Block>
        {item.errorValidate}
      </Block>
    ));

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
      <Block style={styles.container}>
        <Header navigation={navigation} />
        <Block style={styles.viewForm}>
          <Block style={styles.viewFormChild}>
            <Text style={styles.txtTitleForm}>Đăng ký</Text>
            {renderItemInput()}
            <Block style={styles.viewGender}>
              <RadioButton
                select={gender == "male"}
                onPress={() => setGender("male")}
                label={"Nam"}
                viewContainer={{
                  paddingVertical: 5,
                }}
              />
              <RadioButton
                select={gender == "female"}
                onPress={() => setGender("female")}
                label={"Nữ"}
                viewContainer={{
                  paddingVertical: 5,
                }}
              />
            </Block>
            <ButtonMain
              disabled={!formik.isValid}
              viewContainer={[
                styles.viewContainButtonSignup,
                !formik.isValid && { backgroundColor: Theme.COLORS.grey },
              ]}
              viewButton={styles.viewButtonSignup}
              onPress={formik.handleSubmit}
            >
              <Text style={styles.txtLogin}>Đăng ký</Text>
            </ButtonMain>
          </Block>
        </Block>
        <Text style={styles.txtNotAccount}>
          Bạn đã có tài khoản?
          <Text
            onPress={() => navigation.navigate("Signin")}
            style={{ color: Theme.COLORS.main }}
          >
            {" "}
            ĐĂNG NHẬP
          </Text>
        </Text>
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
