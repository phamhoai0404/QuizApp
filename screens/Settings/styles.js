import { StyleSheet } from "react-native";
import AppStyles from "../../constants/AppStyles";
import Theme from "../../constants/Theme";

export default StyleSheet.create({
  ...AppStyles,
  viewContent: {
    width: "92%",
    backgroundColor: Theme.COLORS.white,
    elevation: 1,
    borderRadius: 10,
    marginTop: "5%",
    alignSelf: "center",
  },
  viewContainItem: {
    height: Theme.SIZES.heightItem + 4,
    width: "100%",
  },
  viewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "2.5%",
  },
  viewLeftItem: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  txtItem: {
    fontSize: 15,
    marginLeft: "2.5%",
  },
});
