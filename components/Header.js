import React from "react";
import {
  StyleSheet,
  Platform,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Block } from "galio-framework";
import { FontAwesome5 } from "@expo/vector-icons";

import Theme from "../constants/Theme";
import Images from "../constants/Images";
import ButtonMain from "./ButtonMain";

const { height, width } = Dimensions.get("window");
const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);

const Header = ({ navigation, heightHeader = 250, back = false }) => {
  return (
    <Block style={styles.viewHeader(heightHeader)}>
      <ImageBackground
        source={Images.imageHeader}
        resizeMode="cover"
        style={styles.imgHeader(heightHeader)}
      >
        <Block style={styles.viewUnderlay} />
        <Block style={styles.viewBack}>
          {back && (
            <ButtonMain
              viewContainer={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
              viewButton={{ justifyContent: "center", alignItems: "center" }}
              onPress={() => {
                navigation.goBack();
              }}
              ripple_color={Theme.COLORS.grey}
            >
              <FontAwesome5
                name="chevron-left"
                size={24}
                color={Theme.COLORS.white}
              />
            </ButtonMain>
          )}
        </Block>
      </ImageBackground>
    </Block>
  );
};

const styles = StyleSheet.create({
  viewHeader: (heightHeader) => ({
    height: heightHeader,
    width: "100%",
    backgroundColor: Theme.COLORS.main,
    position: "absolute",
    zIndex: 0,
    overflow: "hidden",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }),
  imgHeader: (heightHeader) => ({
    width: "100%",
    height: heightHeader,
  }),
  viewUnderlay: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: Theme.COLORS.main,
    opacity: 0.4,
  },
  viewBack: {
    position: "absolute",
  },
});

export default Header;
