import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RecipeListScreen from "../screens/RecipeList/RecipeListScreen";
import FoodListScreen from "../screens/FoodList/FoodListScreen";
import DifficultyScreen from "../screens/Difficulty/DifficultyScreen";
import Beginner from "../screens/Difficulty/Beginner";
import Intermediate from "../screens/Difficulty/Intermediate";
import Advance from "../screens/Difficulty/Advanced";
import BothOptionsScreen from "../screens/CookingOptions/BothOptionsScreen";
import RecipeTextScreen from "../screens/CookingOptions/RecipeTextScreen";

import CookingOptionsScreen from "../screens/CookingOptions/CookingOptionsScreen";
import VideoCard from "../components/Cards/VideoCard";
import CameraScreen from "../screens/CameraShot/CameraScreen";
import RewardGainedScreen from "../screens/Reward/RewardGainedScreen";
import AllProfileStack from "./AllProfileStack";
import LeaderboardScreen from "../screens/Leaderboard/LeaderboardScreen";
import LeaderboardProfileScreen from '../screens/Leaderboard/LeaderboardProfileScreen';

const Stack = createNativeStackNavigator();

/* 
- Stack tabs for First home page
- difficulty -> selected difficulty -> Food List
*/
const LeaderboardStack = () => {
  return (
    // HERE IS ALL THE "STACK TABS" for each part of the HOME TAB //
    <Stack.Navigator initialRouteName="LeaderboardHome">
      <Stack.Screen
        options={{ headerShown: false }}
        name="LeaderboardHome"
        component={LeaderboardScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LeaderboardProfile"
        component={LeaderboardProfileScreen}
      />

    </Stack.Navigator>
  );
};

export default LeaderboardStack;
