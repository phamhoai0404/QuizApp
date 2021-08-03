import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Block, Text } from "galio-framework";
import { Ionicons } from "@expo/vector-icons";

import ActionContest from "../../../reduxs/Contest";

import ButtonMain from "../../../components/ButtonMain";
import Theme from "../../../constants/Theme";
import Images from "../../../constants/Images";

const Rank = ({ navigation, passData = null }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (passData) apiGetRankingContest();
  }, []);

  function apiGetRankingContest(search = valueSearch) {
    dispatch(
      ActionContest.GetRankingContestRequest(
        passData?.contestId?.id,
        search,
        (result) => {
          setData(result);
          setRefreshing(false);
        }
      )
    );
  }

  const renderItem = ({ item, index }) => (
    <ButtonMain
      disabled={true}
      viewContainer={[
        styles.viewContainItem,
        data?.rankingIndex == index && {
          borderWidth: 1,
          borderColor: Theme.COLORS.INFO,
        },
      ]}
      viewButton={styles.viewButtonItem}
      // onPress={() => {
      //   if (data?.rankingIndex == index) {
      //     navigation.navigate("Profile");
      //   } else {
      //     navigation.navigate("DetailProfile", { uid: item?.uid });
      //   }
      // }}
    >
      <Block style={styles.viewContentItem}>
        <Text style={styles.txtIndex}>{item?.rankingIndex + 1}</Text>
        <Block style={styles.viewImg}>
          <Image
            source={item?.gender == "nam" ? Images.boy : Images.girl}
            resizeMode="contain"
            style={styles.icon}
          />
        </Block>
        <Block style={styles.viewRightItem}>
          <Text numberOfLines={1} style={styles.txtName}>
            {item?.userName}
          </Text>
          <Block style={styles.viewBottomRight}>
            <Text numberOfLines={2} style={styles.txtBodyQues}>
              {item?.totalScore} câu
            </Text>
            <Text numberOfLines={2} style={styles.txtBodyQues}>
              {item?.totalTime} s
            </Text>
          </Block>
        </Block>
      </Block>
    </ButtonMain>
  );

  return (
    <Block flex>
      <Block style={styles.viewSearch}>
        <Ionicons
          style={{ marginLeft: "4%" }}
          name="ios-search"
          size={24}
          color={valueSearch.length ? Theme.COLORS.main : "black"}
        />
        <TextInput
          value={valueSearch}
          onChangeText={(text) => {
            apiGetRankingContest(text);
            setValueSearch(text);
          }}
          style={styles.tipSearch}
        />
        <ButtonMain
          viewContainer={styles.viewContainButtonClear}
          viewButton={styles.viewButtonClear}
          onPress={() => setValueSearch("")}
        >
          <Ionicons name="md-close" size={20} color="black" />
        </ButtonMain>
      </Block>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
        Xếp hạng của bạn:{" "}
        <Text style={{ color: Theme.COLORS.main }}>
          {data?.rankingIndex + 1}
        </Text>
      </Text>
      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={data?.listResult}
        extraData={data?.listResult}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          apiGetRankingContest();
        }}
      />
    </Block>
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
  txtIndex: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.COLORS.main,
  },
  viewImg: {
    width: 50,
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1%",
  },
  icon: {
    width: 50,
    height: 50,
  },
  viewRightItem: {
    marginLeft: "3%",
    flex: 1,
    justifyContent: "space-between",
  },
  viewBottomRight: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtName: {
    fontSize: 22,
    fontWeight: "bold",
    color: Theme.COLORS.main,
  },
  txtBodyQues: {
    fontSize: 15,
    color: Theme.COLORS.main,
    fontWeight: "bold",
  },
  viewSearch: {
    marginBottom: "5%",
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

export default Rank;
