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
import { ColorSchemeName, Text, StyleSheet } from "react-native";


// ICONS IMPORTING LIBRARIES
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import UserWalletScreen from "../components/Wallet/UserWalletScreen";

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
      <Tabs.Navigator initialRouteName="Home"  >
        <Tabs.Screen
          options={{ headerShown: false, tabBarIcon: () => <MaterialIcons name="leaderboard" size={24} color="#FEAD62" />}}
          name="Leaderboard"
          component={LeaderboardScreen}
          
        />
        <Tabs.Screen
          options={{ headerShown: false, tabBarIcon: () => <MaterialCommunityIcons name="egg-fried" size={24} color="#FEAD62"  /> }} // hides 'Home' header
          name="Home"
          component={AllHomeTabStack}
          
        />

        <Tabs.Screen
          
          options={{ headerShown: false, tabBarIcon: () => <Ionicons name="person-circle-sharp" size={24} color="#FEAD62" /> }}
          name="Profile"
          component={AllProfileStack}
        />
        {/* <Tabs.Screen
          // options={{ headerShown: false, tabBarIcon: ({size, color}) => (<Icon icon="emojione:cooking" inline={true} />) }} // hides 'Home' header

          name="Wallet"
          component={UserWalletScreen}
        />
         */}
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  colorTrue: {
    color: 'red',
  },
  colorFalse: {
    color: 'blue',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",

    justifyContent: "center",
    marginTop: 500,

    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 10,
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  buttonStyle: {
    padding: 40,
  },
  buttonTake: {
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
});
