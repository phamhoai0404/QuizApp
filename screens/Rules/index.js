import { Block, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import ActionContest from "../../reduxs/Contest";
// Styles
import styles from "./styles";
import ButtonMain from "../../components/ButtonMain";
import BackButton from "../../components/BackButon";
import { Image, ScrollView } from "react-native";
import Images from "../../constants/Images";
import { STATE_CONTEST, STATE_USER_IN_CONTEST } from "../../config/Config";
import Theme from "../../constants/Theme";
import moment from "moment";

const Rules = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { passData } = route?.params;

  const [data, setData] = useState(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton navigation={navigation} />,
      headerTitle: () => (
        <Text numberOfLines={1} style={styles.headerTitle}>
          Thể lệ
        </Text>
      ),
      headerRight: () => <Block />,
      headerStyle: styles.headerStyle,
    });
  }, [navigation]);

  useEffect(() => {
    apiDetailContest();
  }, []);

  function apiRegisterContest() {
    dispatch(
      ActionContest.RegisterContestRequest(passData?.id, (result) => {
        apiDetailContest();
      })
    );
  }

  function apiUnRegisterContest() {
    dispatch(
      ActionContest.UnRegisterContestRequest(passData?.id, (result) => {
        apiDetailContest();
      })
    );
  }

  function apiJoinContest() {
    dispatch(
      ActionContest.JoinContestRequest(passData?.id, (result) => {
        navigation.navigate("Question", { data: result });
      })
    );
  }

  function apiDetailContest() {
    dispatch(
      ActionContest.GetContestResultRequest(passData?.id, (result) => {
        setData(result);
      })
    );
  }

  const renderButtonBottom = () => {
    if (passData?.status == STATE_CONTEST.success) {
      return (
        <ButtonMain
          disabled={true}
          onPress={() => {}}
          viewContainer={[
            styles.viewButtonBottomContainer,
            { backgroundColor: Theme.COLORS.green },
          ]}
          viewButton={styles.viewButtonBottom}
        >
          <Text style={styles.txtButtonNext}>Kết thúc</Text>
        </ButtonMain>
      );
    }
    if (!data.length || data[0]?.status == STATE_USER_IN_CONTEST.not_register) {
      return (
        <ButtonMain
          onPress={() => {
            apiRegisterContest();
          }}
          viewContainer={styles.viewButtonBottomContainer}
          viewButton={styles.viewButtonBottom}
        >
          <Text style={styles.txtButtonNext}>Đăng ký</Text>
        </ButtonMain>
      );
    } else if (
      data[0]?.status == STATE_USER_IN_CONTEST.registed &&
      moment(passData?.beginTime) > moment()
    ) {
      return (
        <ButtonMain
          onPress={() => {
            apiUnRegisterContest();
          }}
          viewContainer={styles.viewButtonBottomContainer}
          viewButton={styles.viewButtonBottom}
        >
          <Text style={styles.txtButtonNext}>Hủy đăng ký</Text>
        </ButtonMain>
      );
    } else if (
      data[0]?.status == STATE_USER_IN_CONTEST.registed ||
      data[0]?.status == STATE_USER_IN_CONTEST.pending
    ) {
      return (
        <ButtonMain
          onPress={() => {
            apiJoinContest();
          }}
          viewContainer={styles.viewButtonBottomContainer}
          viewButton={styles.viewButtonBottom}
        >
          <Text style={styles.txtButtonNext}>Bắt đầu</Text>
        </ButtonMain>
      );
    } else if (data[0]?.status == STATE_USER_IN_CONTEST.success) {
      return (
        <ButtonMain
          onPress={() => {}}
          viewContainer={styles.viewButtonBottomContainer}
          viewButton={styles.viewButtonBottom}
        >
          <Text style={styles.txtButtonNext}>Xem kết quả</Text>
        </ButtonMain>
      );
    }

    return null;
  };

  if (!data) return null;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Block style={styles.viewContent}>
        <Text numberOfLines={2} style={styles.txtTitle}>
          {passData?.name}
        </Text>
        <Block style={styles.viewBody}>
          <Block style={styles.viewTopBody}>
            <Image
              source={Images.star}
              resizeMode="contain"
              style={styles.iconStar}
            />
            <Text style={styles.txtTitleBody}>Thể lệ</Text>
          </Block>
          <Text style={styles.txtBody}>{passData?.rules}</Text>
        </Block>
      </Block>
      {renderButtonBottom()}
    </ScrollView>
  );
};

export default Rules;
