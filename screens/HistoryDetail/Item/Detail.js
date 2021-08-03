import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Block, Text } from "galio-framework";

import ButtonMain from "../../../components/ButtonMain";
import Theme from "../../../constants/Theme";
import Images from "../../../constants/Images";
import { STATE_CONTEST } from "../../../config/Config";

const Detail = ({ navigation, data = [], status, questionIndex }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderItem = ({ item, index }) => (
    <ButtonMain
      viewContainer={styles.viewContainItem}
      viewButton={styles.viewButtonItem}
      onPress={() => {
        navigation.navigate("DetailQuestion", {
          questionIndex: index,
          total: data.length,
          dataQuestion: item?.questionId,
          status: status,
          answer: item?.answer,
        });
      }}
    >
      <Block style={styles.viewContentItem}>
        <Block
          style={[
            styles.viewImg,
            !item?.isCorrect &&
              status != STATE_CONTEST.pending && {
                backgroundColor: Theme.COLORS.red,
              },
            item?.isCorrect &&
              status != STATE_CONTEST.pending && {
                backgroundColor: Theme.COLORS.green,
              },
          ]}
        >
          {status != STATE_CONTEST.pending ? (
            <Image
              source={item?.isCorrect ? Images.check : Images.faild}
              resizeMode="contain"
              style={styles.icon}
            />
          ) : (
            <Image
              source={Images.dotBlue}
              resizeMode="contain"
              style={styles.icon}
            />
          )}
        </Block>
        <Block style={styles.viewRightItem}>
          <Text numberOfLines={1} style={styles.txtNumberQues}>
            Câu {index + 1}
          </Text>
          <Text numberOfLines={2} style={styles.txtBodyQues}>
            {item?.questionId?.content}
          </Text>
        </Block>
      </Block>
    </ButtonMain>
  );

  return (
    <FlatList
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      data={data.filter((item, index) => index <= questionIndex)}
      extraData={data}
      keyExtractor={(item, index) => String(index)}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  viewContainItem: {
    width: "99%",
    height: 80,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: Theme.COLORS.lightBlue,
    marginBottom: "5%",
    elevation: 2,
  },
  viewButtonItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  viewContentItem: {
    width: "94%",
    flexDirection: "row",
    alignItems: "center",
  },
  viewImg: {
    width: 50,
    height: 60,
    borderRadius: 5,
    backgroundColor: Theme.COLORS.main,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  viewRightItem: {
    marginLeft: "4%",
    flex: 1,
    justifyContent: "space-between",
  },
  txtNumberQues: {
    fontSize: 18,
    fontWeight: "bold",
  },
  txtBodyQues: {
    fontSize: 14,
    color: Theme.COLORS.main,
    fontWeight: "bold",
  },
});

export default Detail;
