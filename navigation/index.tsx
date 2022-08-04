/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import LeaderboardScreen from "../screens/Leaderboard/LeaderboardScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import AllHomeTabStack from "../Stacks/AllHomeTabStack";
import AllProfileStack from "../Stacks/AllProfileStack";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

const Tabs = createBottomTabNavigator();

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName="Home">
        <Tabs.Screen
          // options={{ headerShown: false, tabBarIcon: ({size, color}) => (<Icon icon="emojione:cooking" inline={true} />) }} // hides 'Home' header

          name="Leaderboard"
          component={LeaderboardScreen}
        />
        <Tabs.Screen
          options={{ headerShown: false }} // hides 'Home' header
          name="Home"
          component={AllHomeTabStack}
        />

        <Tabs.Screen
          // options={{ headerShown: false, tabBarIcon: ({size, color}) => (<Icon icon="emojione:cooking" inline={true} />) }} // hides 'Home' header

          name="Profile"
          component={AllProfileStack}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
