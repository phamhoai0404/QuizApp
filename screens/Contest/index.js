import { Block, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, TextInput, View } from "react-native";

// Actions
import ActionContest from "../../reduxs/Contest";
// Styles
import styles from "./styles";
import Images from "../../constants/Images";
import ItemContest from "../../components/ItemContest";
import ButtonMain from "../../components/ButtonMain";

const Contest = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadMore(1);
  }, []);

  function loadMore(page = Number.parseInt((data.length + 9) / 10) + 1) {
    dispatch(
      ActionContest.GetContestRequest(page, (result) => {
        setRefreshing(false);
        if (page === 1) {
          setData(result);
        } else {
          setData([...data].concat(result));
        }
      })
    );
  }

  const renderItem = ({ item, index }) => {
    return (
      <ItemContest
        data={item}
        onPress={() => {
          navigation.navigate("Rules", { passData: item });
        }}
        onStop={(state_contest) => {
          const newData = [...data];
          newData[index].status = state_contest;
          setData(newData);
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.viewSearch}>
        <Ionicons
          style={{ marginLeft: "4%" }}
          name="ios-search"
          size={24}
          color="black"
        />
        <TextInput
          value={valueSearch}
          onChangeText={(text) => {
            loadMore(1, text);
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
      </View> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{ padding: "5%" }}
        data={data}
        extraData={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        onEndReachedThreshold={0.8}
        onEndReached={() => loadMore()}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          loadMore(1);
        }}
      />
    </View>
  );
};

export default Contest;
