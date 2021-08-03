import { Block, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import ActionTest from "../../reduxs/Test";
// Styles
import styles from "./styles";
import ButtonMain from "../../components/ButtonMain";
import Header from "../../components/Header";
import BackButton from "../../components/BackButon";
import ModalBox from "../../components/ModalBox";
import AlertYN from "../../components/AlertYN";

const Test = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
      headerTitle: () => (
        <Text numberOfLines={1} style={styles.headerTitle}>
          Cài đặt
        </Text>
      ),
      headerRight: () => <Block />,
      headerStyle: styles.headerStyle,
    });
  }, []);

  const [visible, setVisible] = useState("");

  return (
    <Block style={styles.container}>
      <ButtonMain
        viewContainer={{ width: 150, height: 100 }}
        onPress={() => {
          setVisible(!visible);
        }}
      >
        <Text>aaa</Text>
      </ButtonMain>
      <AlertYN
        visible={visible}
        body={"Bạn chắc chắn muốn thoát khỏi ứng dụng?"}
        backDropPress={() => setVisible(false)}
      />
    </Block>
  );
};

export default Test;
