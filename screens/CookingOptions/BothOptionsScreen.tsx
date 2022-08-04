import React from "react";
import { Text, Button, View, StyleSheet, TouchableOpacity } from "react-native";

import VideoCard from "../../Cards/VideoCard";
import RecipeTextScreen from "./RecipeTextScreen";

const BothOptionsScreen = ({ route, navigation }) => {
  const handleDifficultyPress = (name, items) => {
    // console.log("tap", name),
    /* 
    used to navigate throughout different categories of furniture
    navigation is declared in the main component 
    */
    navigation.navigate("Submit", {labels: route.params.labels});
  };

  return (
    <>
      <VideoCard route={route} />
      <RecipeTextScreen route={route} />

      <TouchableOpacity
        color="#5BBEB3"
        style={styles.touch}
        onPress={handleDifficultyPress}
      >
        <Text style={{ color: "white" }}>submit</Text>
      </TouchableOpacity>
    </>
  );
};

export default BothOptionsScreen;

const styles = StyleSheet.create({
  touch: {
    width: 234,
    alignItems: "center",
    height: 64,
    borderRadius: 15,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    backgroundColor: "#5BBEB3",
    marginBottom: 100,
    marginTop: 60,
    alignSelf: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "#48d1cc",
    marginVertical: 10,
    width: 150,
    height: 128,
    borderRadius: 15,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    flexDirection: "row",
    display: "flex",
  },
});
