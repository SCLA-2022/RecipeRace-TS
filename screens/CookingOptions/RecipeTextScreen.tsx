import React from "react";
import { Text, FlatList, View } from "react-native";

const RecipeTextScreen = ({ route, navigation }) => {
  return (
    <>
      <FlatList
        style={{ alignContent: "center" }}
        // Route.params.ingredients is going to the child of the route onto it reaches ingredients
        data={route.params.dataTwo}
        renderItem={({ item }) => (
          <View>
            {/* Display the name of the ingredients ons the top of the screen */}
            <Text style={{ color: "black" }}> {item} </Text>
          </View>
        )}
      />
    </>
  );
};

export default RecipeTextScreen;
