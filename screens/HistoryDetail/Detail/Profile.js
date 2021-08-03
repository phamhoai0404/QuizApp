import { Block } from "galio-framework";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

import ActionUser from "../../../reduxs/User";

import Header from "../../../components/Header";
import AppStyles from "../../../constants/AppStyles";
import ProfileCard from "../../Profile/Card";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../../components/BackButon";

const DetailProfile = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [data, setData] = useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
      headerTitle: () => (
        <Text numberOfLines={1} style={styles.headerTitle}>
          Người dùng
        </Text>
      ),
      headerRight: () => <Block />,
      headerStyle: [
        styles.headerStyle,
        { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
      ],
    });
  }, [navigation]);

  useEffect(() => {
    apiGetUserById();
  }, []);

  function apiGetUserById() {
    dispatch(
      ActionUser.GetUserInforByIdRequest(route?.params.uid, (result) =>
        setData(result)
      )
    );
  }

  if (!data) return null;
  return (
    <Block style={styles.container}>
      <Header navigation={navigation} />
      <ProfileCard data={data} disable />
    </Block>
  );
};

const styles = StyleSheet.create({
  ...AppStyles,
});

export default DetailProfile;
