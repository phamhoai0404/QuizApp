import { StyleSheet } from "react-native";
import Theme from "../../constants/Theme";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  viewForm: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: Theme.COLORS.white,
    borderRadius: 15,
    marginTop: 80,
    elevation: 1,
  },
  viewFormChild: {
    width: "85%",
    alignSelf: "center",
  },
  txtTitleForm: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 15,
    alignSelf: "center",
  },
  viewTipUsername: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: Theme.COLORS.lightBlue,
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 15,
  },
  tipUsername: {
    height: Theme.SIZES.heightItem,
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
  },
  viewContainButtonSignup: {
    borderRadius: 10,
    marginVertical: 15,
    height: Theme.SIZES.heightItem,
    width: "100%",
    backgroundColor: Theme.COLORS.main,
    alignSelf: "center",
  },
  viewButtonSignup: {
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
  viewCheckPrivacy: {
    flexDirection: "row",
    marginTop: 15,
  },
  txtCheckPrivacy: {
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
  txtClickPrivacy: {
    fontSize: 14,
    color: Theme.COLORS.main,
  },
  viewGender: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
