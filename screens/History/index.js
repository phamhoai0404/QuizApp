import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import ActionContest from "../../reduxs/Contest";
// Styles
import styles from "./styles";
import { FlatList } from "react-native";
import Images from "../../constants/Images";
import ItemContest from "../../components/ItemContest";
import FooterLoadmore from "../../components/FooterLoadmore";

const History = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadMore();
    });

    return unsubscribe;
  }, []);

  function loadMore(page = Number.parseInt((data.length + 9) / 10) + 1) {
    setLoading(true);
    dispatch(
      ActionContest.GetHistoryContestRequest(page, (result) => {
        setLoading(false);
        if (!result.length) setIsLoading(false);
        if (page == 1) setData(result);
        else setData(data.concat(result));
        setRefreshing(false);
      })
    );
  }

  const renderItem = ({ item, index }) => {
    return (
      <ItemContest
        data={item?.contestId}
        onPress={() => {
          navigation.navigate("HistoryDetail", {
            passData: item,
            questionIndex: item?.questionIndex,
          });
        }}
        onStop={() => {}}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={{ padding: "4%" }}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={data}
      extraData={data}
      keyExtractor={(item, index) => String(index)}
      renderItem={renderItem}
      onEndReachedThreshold={0.8}
      onEndReached={() => {
        if (isLoading) loadMore();
      }}
      ListFooterComponent={() => (loading ? <FooterLoadmore /> : null)}
      refreshing={refreshing}
      onRefresh={() => {
        setRefreshing(true);
        loadMore(1);
      }}
    />
  );
};

export default History;
