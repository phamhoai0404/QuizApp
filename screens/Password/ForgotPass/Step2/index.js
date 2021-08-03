import { Block, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from "react-native-confirmation-code-field";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Actions
import ActionTest from "../../../../reduxs/Test";

// Styles
import styles from "./styles";
import ButtonMain from "../../../../components/ButtonMain";
import Header from "../../../../components/Header";

const CELL_COUNT = 6;

const ForgotPassStep2 = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [value, setValue] = useState(route.params?.phonenumber || "");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({ index, symbol, isFocused }) => {
    let textChild = null;

    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="✦"
          isLastFilledCell={isLastFilledCell({ index, value })}
        >
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Block
        key={index}
        style={[
          styles.viewCell,
          symbol && styles.focusCell,
          index !== CELL_COUNT - 1 && { marginRight: 15 },
        ]}
      >
        <Text
          style={styles.txtCodefield}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {textChild}
        </Text>
      </Block>
    );
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Header navigation={navigation} back={true} />
      <Block style={styles.viewForm}>
        <Text style={styles.txtTitleForm}>Quên mật khẩu</Text>
        <Text style={styles.txtSubtitleForm}>
          {`Vui lòng nhập mã xác minh được gửi đến số điện thoại ${
            route.params?.phonenumber || ""
          }.`}
        </Text>
      </Block>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
        blurOnSubmit
      />
      <ButtonMain
        onPress={() => navigation.navigate("ForgotPassStep3")}
        viewContainer={[
          styles.viewContainButtonNext,
          { width: "72.25%", alignSelf: "center" },
        ]}
        viewButton={styles.viewButtonNext}
      >
        <Text style={styles.txtButtonNext}>Tiếp theo</Text>
      </ButtonMain>
    </KeyboardAwareScrollView>
  );
};

export default ForgotPassStep2;
