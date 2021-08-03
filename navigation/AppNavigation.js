import * as React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

///////////////////////////Screen//////////////////////////
import Splash from "../screens/Splash";
import Test from "../screens/Test";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Question from "../screens/Question";
import Score from "../screens/Score";
import ForgotPassStep1 from "../screens/Password/ForgotPass/Step1";
import ForgotPassStep2 from "../screens/Password/ForgotPass/Step2";
import ForgotPassStep3 from "../screens/Password/ForgotPass/Step3";
import Theme from "../constants/Theme";
import FeedBack from "../screens/FeedBack";
import AppStyles from "../constants/AppStyles";
import { getFocusedRouteNameFromRoute } from "@react-navigation/core";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import Contest from "../screens/Contest";
import Rules from "../screens/Rules";
import History from "../screens/History";
import HistoryDetail from "../screens/HistoryDetail";
import DetailProfile from "../screens/HistoryDetail/Detail/Profile";
import DetailQuestion from "../screens/HistoryDetail/Detail/Question";
import ChangePass from "../screens/Password/ChangePass";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getTitleTabMain(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Cuộc thi";
  if (routeName === "Home") {
    return "Cuộc thi";
  } else if (routeName === "History") {
    return "Lịch sử tham gia";
  } else if (routeName === "Setting") {
    return "Cài đặt";
  }
  return "Cuộc thi";
}

function TabMain(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarVisible: getTabBarVisible(route),
        tabBarIcon: ({ focused, color }) => {
          const routeName = route.name;
          let icon;
          let size = 22;
          if (routeName === "Home") {
            if (focused) size = 25;
            icon = (
              <MaterialIcons
                name="home"
                size={size}
                color={focused ? Theme.COLORS.white : Theme.COLORS.grey}
              />
            );
          } else if (routeName === "History") {
            if (focused) size = 25;
            icon = (
              <MaterialIcons
                name="history"
                size={size}
                color={focused ? Theme.COLORS.white : Theme.COLORS.grey}
              />
            );
          } else if (routeName === "Setting") {
            if (focused) size = 25;
            icon = (
              <MaterialIcons
                name="settings"
                size={size}
                color={focused ? Theme.COLORS.white : Theme.COLORS.grey}
              />
            );
          }
          return icon;
        },
      })}
      tabBarOptions={{
        activeTintColor: Theme.COLORS.main,
        inactiveTintColor: Theme.COLORS.grey,
        activeBackgroundColor: Theme.COLORS.main,
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Contest} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Setting" component={Settings} />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      headerMode="float"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabMain"
        component={TabMain}
        options={({ route }) => ({
          headerTitle: getTitleTabMain(route),
          headerStyle: AppStyles.headerStyle,
          headerTitleStyle: AppStyles.headerTitle,
          headerLeft: null,
          headerRight: null,
        })}
      />
      <Stack.Screen
        name="Question"
        component={Question}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Score"
        component={Score}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassStep1"
        component={ForgotPassStep1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassStep2"
        component={ForgotPassStep2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassStep3"
        component={ForgotPassStep3}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="FeedBack" component={FeedBack} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Rules" component={Rules} />
      <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
      <Stack.Screen name="DetailProfile" component={DetailProfile} />
      <Stack.Screen name="DetailQuestion" component={DetailQuestion} />
      <Stack.Screen name="ChangePass" component={ChangePass} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
