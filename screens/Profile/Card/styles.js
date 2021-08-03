import { StyleSheet } from "react-native";
import AppStyles from "../../../constants/AppStyles";
import Theme from "../../../constants/Theme";

export default StyleSheet.create({
  ...AppStyles,
  viewContend: {
    width: "90%",
    borderRadius: 10,
    elevation: 1,
    backgroundColor: Theme.COLORS.white,
    marginTop: 150,
    alignSelf: "center",
  },
  viewItem: {
    height: Theme.SIZES.heightItem + 2,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: Theme.COLORS.lightGrey,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  txtLeftItem: {
    fontSize: 15,
    fontWeight: "bold",
  },
  viewRightItem: {
    flex: 1,
    alignItems: "flex-end",
    marginLeft: "2.5%",
  },
  txtRightItem: {
    fontSize: 15,
  },
});
