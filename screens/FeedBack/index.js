import { Block, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Actions
import ActionTest from "../../reduxs/Test";
// Styles
import styles from "./styles";
import BackButton from "../../components/BackButon";
import ButtonMain from "../../components/ButtonMain";
import Theme from "../../constants/Theme";

const FeedBack = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
      headerTitle: () => (
        <Text numberOfLines={1} style={styles.headerTitle}>
          Phản hồi
        </Text>
      ),
      headerRight: () => <Block />,
      headerStyle: styles.headerStyle,
    });
  }, []);

  return (
    <Block style={styles.container}>
      <TextInput
        placeholder="Phản hồi"
        value={text}
        onChangeText={(text) => setText(text)}
        style={styles.viewFeedback}
        multiline
        textAlignVertical="top"
      />
      <ButtonMain
        onPress={() => {}}
        viewContainer={styles.viewButtonBottomContainer}
        viewButton={styles.viewButtonBottom}
      >
        <Text style={styles.txtButtonBottom}>Gửi</Text>
      </ButtonMain>
    </Block>
  );
};

export default FeedBack;
