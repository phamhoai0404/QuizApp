import { StyleSheet } from "react-native";
import AppStyles from "../../constants/AppStyles";
import Theme from "../../constants/Theme";

export default StyleSheet.create({
  ...AppStyles,
  viewContent: {
    width: "85%",
    alignSelf: "center",
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.COLORS.main,
    alignSelf: "center",
    marginVertical: "5%",
  },
  viewBody: {
    width: "100%",
    minHeight: 200,
    maxHeight: 400,
    backgroundColor: Theme.COLORS.lightBlue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: "8%",
    paddingTop: 30 + 0.04 * Theme.SIZES.width,
    paddingBottom: 20,
  },
  viewTopBody: {
    position: "absolute",
    top: -30,
    height: 60,
    width: 150,
    flexDirection: "row",
    backgroundColor: Theme.COLORS.main,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  iconStar: {
    width: 40,
    height: 40,
  },
  txtTitleBody: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.COLORS.white,
    marginLeft: 12,
  },
  txtBody: {
    fontSize: 17,
    fontWeight: "bold",
    color: Theme.COLORS.main,
    alignSelf: "center",
    textAlign: "center",
  },
});
