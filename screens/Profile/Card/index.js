import { Block, Text } from "galio-framework";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioButton from "../../../components/RadioButton";
import Theme from "../../../constants/Theme";

// Actions
// Styles
import styles from "./styles";

const ProfileCard = ({ data = null, disable = false }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const dataItem = [
    {
      nameLeft: "Mã sv",
      name: null,
      value: data?.studentCode || "",
    },
    {
      nameLeft: "Họ tên",
      name: "fullname",
      value: data?.name,
    },
    {
      nameLeft: "Số điện thoại",
      name: "phonenumber",
      value: data?.phone,
    },
    {
      nameLeft: "Email",
      name: "email",
      value: data?.email,
    },
  ];

  const renderItem = () =>
    dataItem.map((item, index) => (
      <Block key={String(index)} style={styles.viewItem}>
        <Text
          style={[
            styles.txtLeftItem,
            (disable || !index) && { color: Theme.COLORS.grey },
          ]}
        >
          {item.nameLeft}
        </Text>
        <Block style={styles.viewRightItem}>
          <Text
            numberOfLines={1}
            style={[
              styles.txtRightItem,
              (disable || !index) && { color: Theme.COLORS.grey },
            ]}
          >
            {item.value}
          </Text>
        </Block>
      </Block>
    ));

  return (
    <Block style={styles.viewContend}>
      {renderItem()}
      <Block style={styles.viewItem}>
        <RadioButton
          select={data?.gender == "nam"}
          label={"Nam"}
          viewContainer={{
            paddingVertical: 10,
          }}
          labelStyle={{ fontSize: 15 }}
          sizeContain={25}
          sizeChild={12}
          disabled={true}
          color_select={Theme.COLORS.grey}
        />
        <RadioButton
          select={data?.gender == "nữ"}
          label={"Nữ"}
          labelStyle={{ fontSize: 15 }}
          viewContainer={{
            paddingVertical: 10,
          }}
          sizeContain={25}
          sizeChild={12}
          disabled={true}
          color_select={Theme.COLORS.grey}
        />
      </Block>
    </Block>
  );
};

export default ProfileCard;
