import { StyleSheet } from "react-native";
import AppStyles from "../../constants/AppStyles";
import Theme from "../../constants/Theme";

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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  viewRightItem: {
    flex: 1,
    alignItems: "flex-end",
    marginLeft: "2.5%",
    fontSize: 15,
  },
  txtLeftItem: {
    fontSize: 15,
    fontWeight: "bold",
  },
  txtRightItem: {
    fontSize: 15,
  },
});
