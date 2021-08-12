import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";
import BackButton from "../../components/BackButon";
import SegmentTab from "../../components/SegmentTab";
import { Block } from "galio-framework";
import Detail from "./Item/Detail";
import Rank from "./Item/Rank";

const HistoryDetail = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const passData = route?.params?.passData;
  const questionIndex = route?.params?.questionIndex;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
      headerTitle: () => (
        <Text numberOfLines={1} style={styles.headerTitle}>
          {passData?.contestId?.name}
        </Text>
      ),
      headerRight: () => <Block />,
      headerStyle: styles.headerStyle,
    });
  }, [navigation]);

  return (
    <Block style={styles.container}>
      <SegmentTab
        label={["Chi tiết", "Bảng xếp hạng"]}
        page={[
          <Detail
            navigation={navigation}
            data={passData?.history}
            status={passData?.contestId?.status}
            questionIndex={questionIndex}
          />,
          <Rank navigation={navigation} passData={passData} />,
        ]}
      />
    </Block>
  );
};
          nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
export default HistoryDetail;
