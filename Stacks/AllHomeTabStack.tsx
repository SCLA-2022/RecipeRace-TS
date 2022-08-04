import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RecipeListScreen from "../screens/RecipeList/RecipeListScreen";
import FoodListScreen from "../screens/FoodList/FoodListScreen";
import DifficultyScreen from "../screens/Difficulty/DifficultyScreen";
import Beginner from "../screens/Difficulty/Beginner";
import Intermediate from "../screens/Difficulty/Intermediate";
import Advance from "../screens/Difficulty/Advance";
import BothOptionsScreen from "../screens/CookingOptions/BothOptionsScreen";
import RecipeTextScreen from "../screens/CookingOptions/RecipeTextScreen";

import CookingOptionsScreen from "../screens/CookingOptions/CookingOptionsScreen";
import VideoCard from "../components/Cards/VideoCard";
import CameraScreen from "../screens/CameraShot/CameraScreen";

const Stack = createNativeStackNavigator();

/* 
- Stack tabs for First home page
- difficulty -> selected difficulty -> Food List
*/
const AllHomeTabStack = () => {
  return (
    // HERE IS ALL THE "STACK TABS" for each part of the HOME TAB //
    <Stack.Navigator >
      <Stack.Screen  name="Difficulty" component={DifficultyScreen}  />
      <Stack.Screen name="Beginner" component={Beginner} />
      <Stack.Screen name="Intermediate" component={Intermediate} />
      <Stack.Screen name="Advance" component={Advance} />
      <Stack.Screen
        options={({ route }: {route:any}) => ({ title: route.params ? route.params.title: '' })}
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


      
    </Stack.Navigator>

  );
};

export default AllHomeTabStack;