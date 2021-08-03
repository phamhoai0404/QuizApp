import { Block } from "galio-framework";
import React, { useEffect, useState, useRef } from "react";
import {
  ScrollView,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { FontAwesome } from "@expo/vector-icons";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

// Actions
import ActionContest from "../../reduxs/Contest";
// Styles
import styles from "./styles";
import Theme from "../../constants/Theme";
import RadioBox from "../../components/RadioBox";

const DURATION = 20;

const Question = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const passData = route?.params?.data;
  const listQuestion = passData?.questionIds;
  const [selectAnswer, setSelectAnswer] = useState(-1);
  const [indexQuestion, setIndexQuestion] = useState(
    passData?.questionIndex || 0
  );
  const [timeAnswer, setTimeAnswer] = useState(0);

  useEffect(() => {
    if (listQuestion.length - 1 < indexQuestion) {
      navigation.pop();
      navigation.navigate("Score", { passData: passData?.contestId });
    }
  }, [indexQuestion]);

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

  const BtnAnswer = ({ item, index, onClick }) => (
    <Block
      style={{
        width: "90%",
        marginBottom: 20,
        elevation: 2,
        backgroundColor: Theme.COLORS.halfGrey,
        alignSelf: "center",
        borderRadius: 6,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.viewContainBtnAnswer,
          index == selectAnswer && { backgroundColor: Theme.COLORS.main },
        ]}
        // viewButton={[styles.viewBtnAnswer]}
        onPress={() => {
          setSelectAnswer(index);
          onClick && onClick();
        }}
      >
        <RadioBox
          color_select={Theme.COLORS.white}
          select={selectAnswer == index}
          sizeChild={10}
          sizeContain={24}
          viewContainer={{ marginHorizontal: 10 }}
        />

        <Block
          style={[
            styles.viewLineBtnAnswer,
            selectAnswer == index && {
              backgroundColor: Theme.COLORS.white,
            },
          ]}
        />
        <Text
          style={[
            styles.txtAnswer,
            index == selectAnswer && {
              color: Theme.COLORS.white,
            },
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    </Block>
  );

  function nextQuestion() {
    if (indexQuestion != listQuestion.length - 1) {
      setIndexQuestion(indexQuestion + 1);
      setSelectAnswer(-1);
      setTimeAnswer(0);
    } else {
      navigation.navigate("Score", { passData: passData?.contestId });
    }
  }

  function apiAnswerContest() {
    dispatch(
      ActionContest.AnswerContestRequest(
        passData?.contestId || "",
        indexQuestion,
        listQuestion[indexQuestion]?.options[selectAnswer]?.answer || "",
        timeAnswer,
        () => {
          nextQuestion();
        }
      )
    );
  }

  if (
    !listQuestion.length ||
    (listQuestion.length && listQuestion.length - 1 < indexQuestion)
  )
    return null;
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
          {listQuestion[indexQuestion]?.content}
        </Text>
        <Block style={styles.viewBottomQues}>
          <Block style={styles.viewNumberQuestion}>
            <Text style={styles.txtNumberQuestion}>
              {indexQuestion + 1}/{listQuestion.length}
            </Text>
          </Block>
          <Block style={styles.viewCoundownTimer}>
            <CountdownCircleTimer
              key={indexQuestion}
              isPlaying
              duration={DURATION}
              trailColor={Theme.COLORS.lightBlue}
              colors={[
                [Theme.COLORS.orange, 0.5],
                [Theme.COLORS.WARNING, 0.3],
                [Theme.COLORS.red, 0.2],
              ]}
              size={60}
              strokeWidth={6}
              onComplete={() => {
                apiAnswerContest();
              }}
            >
              {({ remainingTime, animatedColor }) => {
                return (
                  <Animated.Text
                    onTextLayout={() => setTimeAnswer(DURATION - remainingTime)}
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
        {listQuestion[indexQuestion]?.options.map((item, index) => (
          <BtnAnswer
            key={String(index)}
            item={item.answer}
            index={index}
            onClick={() => {}}
          />
        ))}
      </Block>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.viewContainButtonNext}
        onPress={() => {
          apiAnswerContest();
        }}
      >
        <Text style={styles.txtButtonNext}>Tiếp theo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Question;
