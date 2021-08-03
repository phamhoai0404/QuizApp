import { StyleSheet } from "react-native";
import AppStyles from "../../constants/AppStyles";
import Theme from "../../constants/Theme";

export default StyleSheet.create({
  ...AppStyles,
  viewFeedback: {
    height: "50%",
    width: "85%",
    marginTop: "7.5%",
    paddingLeft: 15,
    paddingTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "flex-start",
    borderColor: Theme.COLORS.grey,
    fontSize: 15,
  },
});
