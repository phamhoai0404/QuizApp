import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import Theme from "../constants/Theme";
import ButtonMain from "./ButtonMain";

const SegmentTab = ({
  viewContainTab,
  viewIndicator,
  viewContainButton,
  color_select = Theme.COLORS.main,
  labelStyle,
  label = ["tab1", "tab2"],
  duration = 100,
  page = [],
}) => {
  const [selectTab, setSelectTab] = useState(0);
  const [xTab, setXtab] = useState(
    Array.from({ length: label.length }).fill(0)
  );
  const translateX = useRef(new Animated.Value(0)).current;
  let refScroll = useRef(null).current;

  const handleSlide = (value) => {
    Animated.timing(translateX, {
      toValue: value,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    handleSlide(xTab[selectTab]);
    refScroll?.scrollToIndex({ index: selectTab, animated: true });
  }, [selectTab]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={[
          styles.defaultViewContainTab,
          { borderColor: color_select },
          viewContainTab,
        ]}
      >
        <Animated.View
          style={[
            styles.defaultViewIndicator,
            viewIndicator,
            {
              backgroundColor: color_select,
              transform: [
                {
                  translateX,
                },
              ],
            },
          ]}
        />
        {label.map((item, index) => (
          <ButtonMain
            key={String(index)}
            viewContainer={[
              styles.defaultContainButton,
              viewContainButton,
              { borderColor: color_select },
            ]}
            viewButton={{ justifyContent: "center", alignItems: "center" }}
            onLayout={(event) => {
              if (index != 0) {
                let newData = [...xTab];
                newData[index] = event.nativeEvent.layout.width;
                setXtab(newData);
              }
            }}
            onPress={() => {
              setSelectTab(index);
            }}
          >
            <Text
              style={[
                {
                  color:
                    index === selectTab ? Theme.COLORS.white : color_select,
                },
                styles.defaultLabelStyle,
                labelStyle,
              ]}
            >
              {item}
            </Text>
          </ButtonMain>
        ))}
      </View>
      <FlatList
        ref={(refs) => (refScroll = refs)}
        horizontal
        data={label}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <Animated.View
            style={{
              width: Theme.SIZES.width,
              height: "100%",
              paddingHorizontal: "6%",
            }}
          >
            {page[index]}
          </Animated.View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultViewContainTab: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    height: 40,
    position: "relative",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: "5%",
  },
  defaultViewIndicator: {
    position: "absolute",
    width: "50%",
    height: "100%",
    bottom: 0,
    left: 0,
    borderRadius: 4,
  },
  defaultContainButton: {
    flex: 1,
  },
  defaultLabelStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default SegmentTab;
