import React from "react";
import {
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Theme from "../constants/Theme";
import Images from "../constants/Images";

const ModalBox = ({
  children,
  backdropStyle,
  overlayStyle,
  onBackdropPress,
  fullScreen,
  ModalComponent,
  isVisible,
  ...rest
}) => {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onBackdropPress}
      transparent
      {...rest}
    >
      <TouchableWithoutFeedback
        onPress={onBackdropPress}
        testID="RNE__Overlay__backdrop"
      >
        <View
          testID="backdrop"
          style={StyleSheet.flatten([styles.backdrop, backdropStyle])}
        />
      </TouchableWithoutFeedback>

      <View style={styles.container} pointerEvents="box-none">
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .4)",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fullscreen: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    backgroundColor: "white",
    // borderRadius: 3,
    padding: 10,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: "rgba(0, 0, 0, .3)",
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
      },
    }),
  },
});

export default ModalBox;
