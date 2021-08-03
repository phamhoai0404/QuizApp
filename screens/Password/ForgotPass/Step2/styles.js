import { StyleSheet } from "react-native";
import AppStyles from "../../../../constants/AppStyles";
import Theme from "../../../../constants/Theme";

export default StyleSheet.create({
  ...AppStyles,
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 30, alignSelf: "center" },
  viewCell: {
    width: 32,
    height: 45,
    borderWidth: 2,
    borderColor: Theme.COLORS.grey,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  focusCell: {
    borderColor: Theme.COLORS.main,
  },
  txtCodefield: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.COLORS.main,
  },
});
