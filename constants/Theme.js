import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Theme = {
  COLORS: {
    DEFAULT: "#DCDCDC",
    PRIMARY: "#9C26B0",
    LABEL: "#FE2472",
    INFO: "#00BCD4",
    ERROR: "#F44336",
    SUCCESS: "#4CAF50",
    WARNING: "#FF9800",
    MUTED: "#979797",
    INPUT: "#DCDCDC",
    ACTIVE: "#9C26B0",
    BUTTON_COLOR: "#9C26B0",
    PLACEHOLDER: "#9FA5AA",
    SWITCH_ON: "#9C26B0",
    SWITCH_OFF: "#D4D9DD",
    GRADIENT_START: "#6B24AA",
    GRADIENT_END: "#AC2688",
    PRICE_COLOR: "#EAD5FB",
    BORDER_COLOR: "#E7E7E7",
    BLOCK: "#E7E7E7",
    CAPTION: "#4A4A4A",

    main: "#0A52A8",
    white: "#fff",
    black: "#000",
    grey: "grey",
    lightGrey: "#EFEFEF",
    halfGrey: "#D4D9DD",
    success: "#5CB85C",
    faild: "#D32F2F",
    blue: "#1A43D6",
    lightBlue: "#E4EBF1",
    red: "#D32F2F",
    orange: "#FF9100",
    green: "#5CB85C",
  },
  SIZES: {
    BLOCK_SHADOW_RADIUS: 2,
    heightItem: 48,
    width: width,
    height: height,
  },
};

export default Theme;
