import React, { useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import moment from "moment-timezone";
import Theme from "../constants/Theme";
import Images from "../constants/Images";
import ButtonMain from "./ButtonMain";
import TimerContest from "./TimerContest";
import { STATE_CONTEST } from "../config/Config";

const ItemContest = ({ data = {}, onPress, onStop }) => {
  //type='register'||'pending'||'success'

  useEffect(() => {
    const interval = setInterval(() => {
      if (moment(data?.endTime) <= moment()) {
        clearInterval(interval);
        onStop(STATE_CONTEST.success);
      } else if (moment(data?.beginTime) <= moment()) {
        clearInterval(interval);
        onStop(STATE_CONTEST.pending);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const ItemBottomRegister = () => (
    <View style={styles.viewBottomContest}>
      <View style={styles.viewLeftBottom}>
        {moment(data?.beginTime) > moment() && (
          <Image
            source={Images.clockCount}
            resizeMode="contain"
            style={styles.imgClockCount}
          />
        )}
        <TimerContest
          stop={() => onStop(STATE_CONTEST.pending)}
          timeEnd={data?.beginTime}
        />
      </View>
      <Image
        source={Images.checkedOrange}
        resizeMode="contain"
        style={styles.imgCheck}
      />
    </View>
  );

  const ItemBottomPending = () => (
    <View style={styles.viewBottomContest}>
      <View style={styles.viewLeftBottom}>
        <Image
          source={Images.dotBlue}
          resizeMode="contain"
          style={styles.imgDot}
        />
        <Text
          numberOfLines={1}
          style={[styles.txtStatusContest, { color: Theme.COLORS.main }]}
        >
          Đang diễn ra
        </Text>
      </View>
      <Image
        source={Images.checkedBlue}
        resizeMode="contain"
        style={styles.imgCheck}
      />
    </View>
  );

  const ItemBottomSuccess = () => (
    <View style={styles.viewBottomContest}>
      <View style={styles.viewLeftBottom}>
        <Image
          source={Images.dotGreen}
          resizeMode="contain"
          style={styles.imgDot}
        />
        <Text
          numberOfLines={1}
          style={[styles.txtStatusContest, { color: Theme.COLORS.green }]}
        >
          Kết thúc
        </Text>
      </View>
      <Image
        source={Images.checkedGreen}
        resizeMode="contain"
        style={styles.imgCheck}
      />
    </View>
  );

  function checkItemBottom() {
    if (data?.status == STATE_CONTEST.register) return ItemBottomRegister();
    else if (data?.status == STATE_CONTEST.pending) return ItemBottomPending();
    return ItemBottomSuccess();
  }

  return (
    <ButtonMain
      onPress={onPress}
      viewButton={styles.viewButtonItem}
      viewContainer={[
        styles.viewContainItem,
        data?.status == STATE_CONTEST.pending && {
          borderRightColor: Theme.COLORS.main,
        },
        data?.status == STATE_CONTEST.success && {
          borderRightColor: Theme.COLORS.green,
        },
      ]}
    >
      <View style={styles.viewIcon}>
        <Image
          source={Images.trophy}
          resizeMode="contain"
          style={styles.icon}
        />
      </View>
      <View style={styles.viewRightItem}>
        <Text numberOfLines={1} style={styles.txtNameContest}>
          {data?.name}
        </Text>
        <View style={styles.viewTimeContest}>
          <View style={styles.viewTime}>
            <Image
              source={Images.play}
              resizeMode="contain"
              style={styles.iconClock}
            />
            <Text style={styles.txtDate}>
              {moment(data?.beginTime)
                .tz("Asia/Ho_Chi_Minh")
                .format("DD/MM/YYYY")}
            </Text>
          </View>
          <View style={styles.viewTime}>
            <Text style={styles.txtDate}>
              {moment(data?.beginTime).tz("Asia/Ho_Chi_Minh").format("hh:mm")}
            </Text>
          </View>
        </View>
        <View style={styles.viewTimeContest}>
          <View style={styles.viewTime}>
            <Image
              source={Images.stop}
              resizeMode="contain"
              style={styles.iconClock}
            />
            <Text style={styles.txtDate}>
              {moment(data?.endTime)
                .tz("Asia/Ho_Chi_Minh")
                .format("DD/MM/YYYY")}
            </Text>
          </View>
          <View style={styles.viewTime}>
            <Text style={styles.txtDate}>
              {moment(data?.endTime).tz("Asia/Ho_Chi_Minh").format("hh:mm")}
            </Text>
          </View>
        </View>
        {checkItemBottom()}
      </View>
    </ButtonMain>
  );
};

const styles = StyleSheet.create({
  viewContainItem: {
    width: "100%",
    borderRightWidth: 5,
    borderRightColor: Theme.COLORS.orange,
    borderRadius: 5,
    backgroundColor: Theme.COLORS.lightBlue,
    elevation: 2,
    marginBottom: "4%",
  },
  viewButtonItem: {
    flexDirection: "row",
    padding: "2.5%",
  },
  viewIcon: {
    width: 80,
    height: 100,
    backgroundColor: Theme.COLORS.main,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
  viewRightItem: {
    marginLeft: "2.5%",
    flex: 1,
    justifyContent: "space-between",
  },
  txtNameContest: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.COLORS.main,
    marginTop: -3,
  },
  viewTimeContest: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 2,
  },
  viewTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconClock: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  txtDate: {
    fontSize: 15,
    fontWeight: "bold",
    color: Theme.COLORS.main,
  },
  viewBottomContest: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewLeftBottom: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgClockCount: {
    width: 30,
    height: 30,
    marginRight: 3,
  },
  imgDot: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  txtStatusContest: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imgCheck: {
    width: 18,
    height: 18,
  },
});

export default ItemContest;
