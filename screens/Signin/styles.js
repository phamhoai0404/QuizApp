import { StyleSheet } from "react-native";
import AppStyles from "../../constants/AppStyles";
import Theme from "../../constants/Theme";

export default StyleSheet.create({
  ...AppStyles,
  viewForm: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: Theme.COLORS.white,
    borderRadius: 15,
    marginTop: 200,
    elevation: 1,
  },
  viewFormChild: {
    width: "85%",
    alignSelf: "center",
  },
  txtTitleForm: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 15,
    alignSelf: "center",
  },
  viewTipUsername: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: Theme.COLORS.lightBlue,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  tipUsername: {
    height: Theme.SIZES.heightItem,
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
  },
  btnForgot: {
    marginTop: 10,
    alignSelf: "flex-end",
  },
  txtForgot: {
    color: Theme.COLORS.grey,
  },
  viewContainButtonLogin: {
    borderRadius: 10,
    marginVertical: 15,
    backgroundColor: Theme.COLORS.main,
    height: Theme.SIZES.heightItem,
    width: "100%",
  },
  viewButtonLogin: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtLogin: {
    fontSize: 20,
    color: Theme.COLORS.white,
  },
  txtNotAccount: {
    fontSize: 15,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
