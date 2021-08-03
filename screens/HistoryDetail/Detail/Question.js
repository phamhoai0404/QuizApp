import { Block } from "galio-framework";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, Animated } from "react-native";

import AppStyles from "../../../constants/AppStyles";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../../components/BackButon";
import Theme from "../../../constants/Theme";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import RadioBox from "../../../components/RadioBox";
import ButtonMain from "../../../components/ButtonMain";
import { STATE_CONTEST, STATE_USER_IN_CONTEST } from "../../../config/Config";

const DetailQuestion = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { dataQuestion, questionIndex, total, status, answer } = route?.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
      headerTitle: () => (
        <Text numberOfLines={1} style={styles.headerTitle}>
          Câu hỏi
        </Text>
      ),
      headerRight: () => <Block />,
      headerStyle: [
        styles.headerStyle,
        { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
      ],
    });
  }, [navigation]);

  const Bubble = ({ size, location }) => (
    <Block
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: size,
        opacity: 0.2,
        backgroundColor: Theme.COLORS.white,
        ...location,
      }}
    />
  );

  const BtnAnswer = ({ item, index, onClick }) => {
    return (
      <ButtonMain
        disabled={true}
        viewContainer={[
          styles.viewContainBtnAnswer,
          item == answer && {
            backgroundColor: Theme.COLORS.main,
          },
          item == dataQuestion?.correctAnswer &&
            status == STATE_CONTEST.close && {
              backgroundColor: Theme.COLORS.green,
            },
        ]}
        viewButton={[styles.viewBtnAnswer]}
      >
        <RadioBox
          color_select={Theme.COLORS.white}
          select={
            (item == dataQuestion?.correctAnswer &&
              status == STATE_CONTEST.close) ||
            item == answer
          }
          sizeChild={10}
          sizeContain={24}
          viewContainer={{ marginHorizontal: 10 }}
        />

        <Block
          style={[
            styles.viewLineBtnAnswer,
            ((item == dataQuestion?.correctAnswer &&
              status == STATE_CONTEST.close) ||
              item == answer) && {
              backgroundColor: Theme.COLORS.white,
            },
          ]}
        />
        <Text
          style={[
            styles.txtAnswer,
            ((item == dataQuestion?.correctAnswer &&
              status == STATE_CONTEST.close) ||
              (item == answer && status)) && {
              color: Theme.COLORS.white,
            },
          ]}
        >
          {item}
        </Text>
      </ButtonMain>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Block style={styles.viewQuestion}>
        <Bubble size={150} location={{ left: -50, top: -50 }} />
        <Bubble size={80} location={{ right: -10, top: 10 }} />
        <Bubble size={70} location={{ left: 30, top: 150 }} />
        <Bubble size={80} location={{ right: -15, bottom: -15 }} />
        <Text numberOfLines={5} adjustsFontSizeToFit style={styles.txtQuestion}>
          {dataQuestion?.content}
        </Text>
        <Block style={styles.viewBottomQues}>
          <Block style={styles.viewNumberQuestion}>
            <Text style={styles.txtNumberQuestion}>
              {questionIndex + 1}/{total}
            </Text>
          </Block>
          <Block style={styles.viewCoundownTimer}>
            <CountdownCircleTimer
              isPlaying
              duration={0}
              trailColor={Theme.COLORS.lightBlue}
              colors={[
                [Theme.COLORS.orange, 0.5],
                [Theme.COLORS.WARNING, 0.3],
                [Theme.COLORS.red, 0.2],
              ]}
              size={60}
              strokeWidth={6}
            >
              {({ remainingTime, animatedColor }) => {
                return (
                  <Animated.Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: animatedColor,
                    }}
                  >
                    {remainingTime}
                  </Animated.Text>
                );
              }}
            </CountdownCircleTimer>
          </Block>
          <Block style={{ width: 60, height: 35 }} />
        </Block>
      </Block>
      <Block style={styles.viewAnswer}>
        {dataQuestion?.options.map((item, index) => (
          <BtnAnswer key={String(index)} item={item.answer} index={index} />
        ))}
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ...AppStyles,
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.lightGrey,
  },
  viewQuestion: {
    height: 250,
    backgroundColor: Theme.COLORS.main,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  txtQuestion: {
    fontSize: 24,
    fontWeight: "bold",
    color: Theme.COLORS.white,
    textAlign: "center",
    width: Theme.SIZES.width - 20,
    flex: 1,
    textAlignVertical: "center",
    marginBottom: 35,
  },
  viewBottomQues: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    flexDirection: "row",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  viewNumberQuestion: {
    backgroundColor: Theme.COLORS.white,
    width: 60,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginLeft: 2,
    marginBottom: 2,
  },
  txtNumberQuestion: {
    fontSize: 16,
    color: Theme.COLORS.grey,
    fontWeight: "bold",
  },
  viewCoundownTimer: {
    backgroundColor: Theme.COLORS.white,
    borderRadius: 60,
    marginBottom: -30,
    elevation: 10,
  },
  viewAnswer: {
    width: "100%",
    marginTop: 60,
  },
  viewContainBtnAnswer: {
    width: "90%",
    height: Theme.SIZES.heightItem + 2,
    alignSelf: "center",
    borderRadius: 6,
    marginBottom: 20,
    elevation: 2,
    backgroundColor: Theme.COLORS.white,
  },
  viewBtnAnswer: {
    alignItems: "center",
    flexDirection: "row",
  },
  viewLineBtnAnswer: {
    height: "100%",
    width: 1,
    backgroundColor: Theme.COLORS.lightBlue,
  },
  txtAnswer: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: Theme.COLORS.grey,
  },
});

export default DetailQuestion;
