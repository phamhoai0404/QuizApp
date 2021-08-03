import { StyleSheet } from "react-native";
import AppStyles from "../../constants/AppStyles";
import Theme from "../../constants/Theme";

export default StyleSheet.create({
  ...AppStyles,
  viewContent: {
    alignSelf: "center",
    width: "92%",
  },
  viewSearch: {
    width: "90%",
    marginTop: "5%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Theme.COLORS.halfGrey,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  tipSearch: {
    height: 40,
    flex: 1,
    paddingHorizontal: "4%",
  },
  viewContainButtonClear: {
    marginRight: 5,
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  viewButtonClear: {
    justifyContent: "center",
    alignItems: "center",
  },
});
