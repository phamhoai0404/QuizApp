import { Block, Text } from "galio-framework";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { MaterialIcons } from "@expo/vector-icons";

// Actions
import ActionContest from "../../reduxs/Contest";
// Styles
import styles from "./styles";
import Images from "../../constants/Images";
import Theme from "../../constants/Theme";
import ButtonMain from "../../components/ButtonMain";

const Score = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const passData = route?.params?.passData;
  const [data, setData] = useState(null);

  useEffect(() => {
    apiGetResultContest();
  }, []);

  function apiGetResultContest() {
    dispatch(
      ActionContest.GetContestResultRequest(passData, (result) => {
        setData(result[0]);
      })
    );
  }

  if (!data) return null;
  return (
    <Block style={styles.container}>
      <Header navigation={navigation} />
      <Block style={styles.viewInfor}>
        <Image
          source={Images.award}
          style={{
            width: 100,
            height: 100,
            marginTop: -50,
            alignSelf: "center",
          }}
          resizeMode="contain"
        />
        <Block style={styles.viewBody}>
          <Text style={styles.txtBody}>
            Chúc mừng bạn đã hoàn thành phần thi trong{" "}
            <Text style={{ color: Theme.COLORS.red }}>{data?.totalTime}s</Text>.
            Kết quả của cuộc thi sẽ được cập nhật sau khi cuộc thi kết thúc.
          </Text>
        </Block>
      </Block>
      <ButtonMain
        onPress={() => {
          navigation.navigate("TabMain");
        }}
        viewContainer={styles.viewButtonBottomContainer}
        viewButton={styles.viewButtonBottom}
      >
        <Text style={styles.txtButtonNext}>Trang chủ</Text>
      </ButtonMain>
    </Block>
  );
};

export default Score;
