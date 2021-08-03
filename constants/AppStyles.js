import Theme from "../constants/Theme";

const AppStyles = {
  container: {
    flex: 1,
  },
  viewContainButtonNext: {
    borderRadius: 10,
    marginVertical: 30,
    width: "100%",
    height: Theme.SIZES.heightItem,
  },
  viewButtonNext: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.COLORS.main,
  },
  txtButtonNext: {
    fontSize: 20,
    color: Theme.COLORS.white,
  },
  viewForm: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: Theme.COLORS.white,
    borderRadius: 15,
    marginTop: 200,
    elevation: 1,
    paddingBottom: 30,
  },
  viewFormChild: {
    width: "85%",
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
  txtTitleForm: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 15,
    alignSelf: "center",
  },
  txtSubtitleForm: {
    fontSize: 18,
    width: "85%",
    alignSelf: "center",
  },
  headerTitle: {
    alignSelf: "center",
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.COLORS.white,
  },
  headerStyle: {
    backgroundColor: Theme.COLORS.main,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 0,
  },
  viewButtonBottomContainer: {
    minWidth: 200,
    backgroundColor: Theme.COLORS.main,
    height: Theme.SIZES.heightItem,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 30,
  },
  viewButtonBottom: {
    justifyContent: "center",
    alignItems: "center",
  },
  txtButtonBottom: {
    fontSize: 20,
    color: Theme.COLORS.white,
  },
};
export default AppStyles;
