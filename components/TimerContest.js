import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";

import Theme from "../constants/Theme";
import Images from "../constants/Images";

const TimerContest = ({
  timeEnd = moment().endOf("day"),
  viewContainer,
  viewItem,
  timeStyles,
  desStyles,
  stop,
}) => {
  const [days, setDays] = useState(undefined);
  const [hours, setHours] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [seconds, setSeconds] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeEnd);
      const now = moment();
      const duration = moment.duration(then.diff(now));

      const d = duration.days();
      const h = duration.hours();
      const m = duration.minutes();
      const s = duration.seconds();
      if (d == "00" && h == "0" && m == "00" && s == "00") {
        clearInterval(interval);
        stop && stop();
      }
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={[styles.defaultViewContainer, viewContainer]}>
      <View style={[styles.defaultViewItem, viewItem]}>
        <Text style={[styles.defaultTimeStyles, timeStyles]}>{days}</Text>
        <Text style={[styles.defaultDesStyles, desStyles]}>Ngày</Text>
      </View>
      <View style={[styles.defaultViewItem, viewItem]}>
        <Text style={[styles.defaultTimeStyles, timeStyles]}>{hours}</Text>
        <Text style={[styles.defaultDesStyles, desStyles]}>Giờ</Text>
      </View>
      <View style={[styles.defaultViewItem, viewItem]}>
        <Text style={[styles.defaultTimeStyles, timeStyles]}>{minutes}</Text>
        <Text style={[styles.defaultDesStyles, desStyles]}>Phút</Text>
      </View>
      <View style={[styles.defaultViewItem, viewItem]}>
        <Text style={[styles.defaultTimeStyles, timeStyles]}>{seconds}</Text>
        <Text style={[styles.defaultDesStyles, desStyles]}>Giây</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultViewContainer: {
    flexDirection: "row",
  },
  defaultViewItem: {
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  defaultTimeStyles: {
    fontSize: 18,
    fontWeight: "bold",
    color: Theme.COLORS.orange,
  },
  defaultDesStyles: {
    fontSize: 12,
    fontWeight: "bold",
    color: Theme.COLORS.orange,
    lineHeight: 12,
  },
});

export default TimerContest;
