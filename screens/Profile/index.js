import { Block, Text } from "galio-framework";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFormik } from "formik";

// Actions
import ActionSingin from "../../reduxs/Signin";
import ActionUser from "../../reduxs/User";
// Styles
import styles from "./styles";
import ButtonMain from "../../components/ButtonMain";
import Header from "../../components/Header";
import BackButton from "../../components/BackButon";
import ProfileCard from "./Card";
import Theme from "../../constants/Theme";
import { TextInput } from "react-native";
import RadioButton from "../../components/RadioButton";
import AlertYN from "../../components/AlertYN";
import {
  openAlert,
  resetScreen,
  validateUserInfor,
} from "../../constants/utils";
import ErrorValidate from "../../components/ErrorValidate";

const Profile = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [visible, setVisible] = useState(false);
  const [gender, setGender] = useState(state.user.data?.gender || "nam");
  let refFormik = useRef();
  const formik = useFormik({
    initialValues: {
      fullname: state.user.data?.name,
      phonenumber: state.user.data?.phone,
      email: state.user.data?.email,
    },
    onSubmit: (values) => {
      dispatch(
        ActionUser.UpdateUserInforRequest(
          state.signin.data?.user?.id,
          values.fullname,
          values.phonenumber,
          values.email,
          gender,
          () => {
            openAlert(dispatch, "Thông báo", "Cập nhật thông tin thành công");
          }
        )
      );
      setEdit(!edit);
    },
    validationSchema: validateUserInfor,
    innerRef: refFormik,
    enableReinitialize: true,
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
      headerTitle: () => (
        <Text numberOfLines={1} style={styles.headerTitle}>
          Tài khoản
        </Text>
      ),
      headerRight: () => (
        <ButtonMain
          onPress={() => {
            if (edit) formik.handleSubmit();
            else {
              setEdit(!edit);
            }
          }}
          viewContainer={{
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
          viewButton={{ justifyContent: "center", alignItems: "center" }}
        >
          {!edit ? (
            <FontAwesome5 name="edit" size={24} color={Theme.COLORS.white} />
          ) : (
            <FontAwesome5 name="check" size={24} color={Theme.COLORS.white} />
          )}
        </ButtonMain>
      ),
      headerStyle: [
        styles.headerStyle,
        { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
      ],
    });
  });

  useEffect(() => {
    dispatch(ActionUser.GetUserInforRequest(state.signin.data?.user?.id));
  }, []);

  const dataItem = [
    {
      nameLeft: "Mã sv",
      name: null,
      value: state.user.data?.studentCode || "",
      handleChange: null,
      handleBlur: null,
      errorValidate: null,
    },
    {
      nameLeft: "Họ tên",
      name: "fullname",
      value: formik.values.fullname,
      handleChange: formik.handleChange("fullname"),
      handleBlur: formik.handleBlur("fullname"),
      errorValidate: (
        <ErrorValidate
          value={formik.errors.fullname}
          touched={formik.touched.fullname}
        />
      ),
    },
    {
      nameLeft: "Số điện thoại",
      name: "phonenumber",
      value: formik.values.phonenumber,
      handleChange: formik.handleChange("phonenumber"),
      handleBlur: formik.handleBlur("phonenumber"),
      errorValidate: (
        <ErrorValidate
          value={formik.errors.phonenumber}
          touched={formik.touched.phonenumber}
        />
      ),
    },
    {
      nameLeft: "Email",
      name: "email",
      value: formik.values.email,
      handleChange: formik.handleChange("email"),
      handleBlur: formik.handleBlur("email"),
      errorValidate: (
        <ErrorValidate
          value={formik.errors.email}
          touched={formik.touched.email}
        />
      ),
    },
  ];

  const renderItem = () =>
    dataItem.map((item, index) => (
      <Block
        style={{
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: Theme.COLORS.lightGrey,
        }}
        key={String(index)}
      >
        <Block style={styles.viewItem}>
          <Text
            style={[styles.txtLeftItem, !index && { color: Theme.COLORS.grey }]}
          >
            {item.nameLeft}
          </Text>
          <TextInput
            name={item.name}
            editable={index != 0}
            value={item.value}
            onChangeText={item.handleChange}
            onBlur={item.handleBlur}
            style={styles.viewRightItem}
            textAlign="right"
          />
        </Block>
        {item.errorValidate}
      </Block>
    ));

  return (
    <Block style={styles.container}>
      <Header navigation={navigation} />
      <AlertYN
        visible={visible}
        body={"Bạn chắc chắn muốn thoát khỏi ứng dụng?"}
        backDropPress={() => {
          setVisible(false);
        }}
        onPressCancel={() => {
          setVisible(false);
        }}
        onPressOK={() => {
          dispatch(
            ActionSingin.SignoutRequest(
              state.signin.data?.tokens?.refresh?.token,
              () => {
                resetScreen(navigation, "Signin");
              }
            )
          );
          setVisible(false);
        }}
      />
      {!edit ? (
        <ProfileCard data={state.user.data} disable />
      ) : (
        <Block style={styles.viewContend}>
          {renderItem()}
          <Block style={styles.viewItem}>
            <RadioButton
              select={gender == "nam"}
              label={"Nam"}
              viewContainer={{
                paddingVertical: 5,
              }}
              labelStyle={{ fontSize: 15 }}
              sizeContain={25}
              sizeChild={12}
              onPress={() => setGender("nam")}
            />
            <RadioButton
              select={gender == "nữ"}
              label={"Nữ"}
              labelStyle={{ fontSize: 15 }}
              viewContainer={{
                paddingVertical: 5,
              }}
              sizeContain={25}
              sizeChild={12}
              onPress={() => setGender("nữ")}
            />
          </Block>
        </Block>
      )}
      <ButtonMain
        onPress={() => {
          setVisible(true);
        }}
        viewContainer={[
          styles.viewButtonBottomContainer,
          { backgroundColor: Theme.COLORS.red },
        ]}
        viewButton={styles.viewButtonBottom}
        ripple_color={Theme.COLORS.white}
      >
        <Text style={styles.txtButtonBottom}>Đăng xuất</Text>
      </ButtonMain>
    </Block>
  );
};

export default Profile;
