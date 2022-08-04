import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RecipeListScreen from "../Screens/RecipeList/RecipeListScreen";
import FoodListScreen from "../Screens/FoodList/FoodListScreen";
import DifficultyScreen from "../Screens/Difficulty/DifficultyScreen";
import Beginner from "../Screens/Difficulty/Beginner";
import Intermediate from "../Screens/Difficulty/Intermediate";
import Advance from "../Screens/Difficulty/Advance";
import VideoScreen from "../Screens/CookingOptions/VideoScreen";
import BothOptionsScreen from "../Screens/CookingOptions/BothOptionsScreen";
import RecipeTextScreen from "../Screens/CookingOptions/RecipeTextScreen";

import CookingOptionsScreen from "../Screens/CookingOptions/CookingOptionsScreen";
import VideoCard from "../Cards/VideoCard";
import CameraScreen from "../Screens/CameraShot/CameraScreen";
import ChooseLandOption from "../Screens/Pets/ChooseLandOption";

const Stack = createNativeStackNavigator();

/* 
- Stack tabs for First home page
- difficulty -> selected difficulty -> Food List
*/
const AllHomeTabStack = () => {
  return (
    // HERE IS ALL THE "STACK TABS" for each part of the HOME TAB //
    <Stack.Navigator style={{backgroundColor: 'white'}}>
      <Stack.Screen style={{backgroundColor: 'white'}} name="Difficulty" component={DifficultyScreen}  />
      <Stack.Screen name="Beginner" component={Beginner} />
      <Stack.Screen name="Intermediate" component={Intermediate} />
      <Stack.Screen name="Advance" component={Advance} />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.title })}
        name="FoodList"
        component={FoodListScreen}
      />

      <Stack.Screen
        // options={({ route }) => ({ title: route.params.title })}
        name="RecipeList"
        component={RecipeListScreen}
      />

      {/* COOKING OPTION SECTION */}
      <Stack.Screen
        // options={({ route }) => ({ title: route.params.title })}
        name="CookingOptions"
        component={CookingOptionsScreen}
      />
      <Stack.Screen
        // options={({ route }) => ({ title: route.params.title })}
        name="Video"
        component={VideoCard}
      />
      <Stack.Screen
        // options={({ route }) => ({ title: route.params.title })}
        name="Both"
        component={BothOptionsScreen}
      />
      <Stack.Screen
        // options={({ route }) => ({ title: route.params.title })}
        name="Step by Step"
        component={RecipeTextScreen}
      />
      <Stack.Screen
        // options={({ route }) => ({ title: route.params.title })}
        name="Submit"
        component={CameraScreen}
      />
      <Stack.Screen
      // options={({ route }) => ({ title: route.params.title })}
      name="Choose"
      component={ChooseLandOption}
    />

      
    </Stack.Navigator>

  );
};

export default AllHomeTabStack;
