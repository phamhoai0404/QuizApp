import { Block, Text } from "galio-framework";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons, Feather, AntDesign } from "@expo/vector-icons";
// Actions
import ActionTest from "../../reduxs/Test";
// Styles
import styles from "./styles";
import ButtonMain from "../../components/ButtonMain";
import Theme from "../../constants/Theme";
import { Linking, Switch } from "react-native";

const Settings = ({ navigation, route }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(true);
  const [sound, setSound] = useState(true);
  const dataOption = [
    {
      name: "Tài khoản",
      iconLeft: (
        <MaterialCommunityIcons
          name="account-outline"
          size={24}
          color={Theme.COLORS.grey}
          style={{ width: 25 }}
        />
      ),
      onClick: () => {
        navigation.navigate("Profile");
      },
    },
    {
      name: "Đổi mật khẩu",
      iconLeft: (
        <MaterialCommunityIcons
          name="lock-outline"
          size={22}
          color={Theme.COLORS.grey}
          style={{ width: 25 }}
        />
      ),
      onClick: () => {
        navigation.navigate("ChangePass");
      },
    },
    {
      name: "Phản hồi",
      iconLeft: (
        <MaterialCommunityIcons
          name="message-text-outline"
          size={22}
          color={Theme.COLORS.grey}
          style={{ width: 25, marginTop: 5 }}
        />
      ),
      onClick: () => {
        // navigation.navigate("FeedBack");
        Linking.openURL("mailto:doanphungtu@gmail.com");
      },
    },
  ];

  return (
    <Block style={styles.container}>
      <Block style={styles.viewContent}>
        {dataOption.map((item, index) => (
          <ButtonMain
            key={String(index)}
            viewContainer={[
              styles.viewContainItem,
              index != 0 && {
                borderTopWidth: 1,
                borderTopColor: Theme.COLORS.lightGrey,
              },
              index == 0 && {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
              index == dataOption.length - 1 && {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            ]}
            viewButton={styles.viewItem}
            onPress={() => {
              item.onClick();
            }}
          >
            <Block style={styles.viewLeftItem}>
              {item.iconLeft}
              <Text style={styles.txtItem}>{item.name}</Text>
            </Block>
            <Feather name="chevron-right" size={24} color={Theme.COLORS.grey} />
          </ButtonMain>
        ))}

        {/* <ButtonMain
          viewContainer={styles.viewContainItem}
          viewButton={styles.viewItem}
          onPress={() => {
            setNotification(!notification);
          }}
        >
          <Block style={styles.viewLeftItem}>
            <AntDesign
              name="notification"
              size={20}
              color={Theme.COLORS.grey}
              style={{ width: 25 }}
            />
            <Text style={styles.txtItem}>Thông báo</Text>
          </Block>
          <Switch
            value={notification}
            onValueChange={(value) => setNotification(value)}
            thumbColor={Theme.COLORS.main}
            trackColor={Theme.COLORS.main}
          />
        </ButtonMain> */}
        {/* <ButtonMain
          viewContainer={styles.viewContainItem}
          viewButton={styles.viewItem}
          onPress={() => {
            setSound(!sound);
          }}
        >
          <Block style={styles.viewLeftItem}>
            <AntDesign
              name="sound"
              size={22}
              color={Theme.COLORS.grey}
              style={{ width: 25 }}
            />
            <Text style={styles.txtItem}>Âm thanh</Text>
          </Block>
          <Switch
            value={sound}
            onValueChange={(value) => setSound(value)}
            thumbColor={Theme.COLORS.main}
            trackColor={Theme.COLORS.main}
          />
        </ButtonMain> */}
      </Block>
    </Block>
  );
};

export default Settings;
