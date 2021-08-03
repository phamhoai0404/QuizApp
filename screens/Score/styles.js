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
  viewInfor: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: Theme.COLORS.white,
    borderRadius: 15,
    marginTop: 200,
    elevation: 1,
  },
  viewBody: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 15,
  },
  txtBody: {
    fontSize: 18,
    fontWeight: "bold",
    color: Theme.COLORS.main,
    textAlign: "center",
  },
});
