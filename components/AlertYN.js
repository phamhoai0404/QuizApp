import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Theme from "../constants/Theme";
import Images from "../constants/Images";
import ModalBox from "./ModalBox";
import ButtonMain from "./ButtonMain";

const AlertYN = ({
  visible = false,
  onPressOK,
  onPressCancel,
  txtOk = "Ok",
  txtCancel = "Hủy",
  title = "Thông báo",
  body = "",
  backDropPress,
}) => {
  return (
    <ModalBox
      isVisible={visible}
      onBackdropPress={() => {
        backDropPress && backDropPress();
      }}
    >
      <View style={styles.viewContent}>
        <View style={styles.viewTitle}>
          <Text style={styles.txtTitle}>{title}</Text>
        </View>
        <View style={styles.viewBody}>
          <Text style={styles.txtBody}>{body}</Text>
        </View>
        <View style={styles.viewBottom}>
          <ButtonMain
            onPress={() => {
              onPressCancel();
            }}
            viewContainer={[
              styles.viewContainBtn,
              { backgroundColor: Theme.COLORS.halfGrey, marginRight: 15 },
            ]}
            viewButton={styles.viewButtonBottom}
          >
            <Text style={styles.txtBtn}>{txtCancel}</Text>
          </ButtonMain>
          <ButtonMain
            onPress={() => {
              onPressOK();
            }}
            viewContainer={styles.viewContainBtn}
            viewButton={styles.viewButtonBottom}
          >
            <Text style={styles.txtBtn}>{txtOk}</Text>
          </ButtonMain>
        </View>
      </View>
    </ModalBox>
  );
};

const styles = StyleSheet.create({
  viewContent: {
    width: "80%",
    backgroundColor: Theme.COLORS.white,
    borderRadius: 10,
  },
  viewTitle: {
    width: "100%",
    height: Theme.SIZES.heightItem,
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLORS.halfGrey,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewBody: {
    width: "100%",
    paddingVertical: "5%",
    paddingHorizontal: "8%",
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLORS.halfGrey,
  },
  txtBody: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 25,
  },
  viewBottom: {
    padding: "2.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  viewContainBtn: {
    height: 35,
    minWidth: 80,
    backgroundColor: Theme.COLORS.main,
    borderRadius: 5,
  },
  viewButtonBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtBtn: {
    fontSize: 15,
    color: Theme.COLORS.white,
  },
});

export default AlertYN;
