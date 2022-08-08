import React from "react";

import { Text, FlatList, View, Button, TouchableOpacity } from "react-native";

const RecipeListScreen = ({
  navigation,
  route,
}: {
  route: any;
  navigation: any;
}) => {
  return (
    <>
      {/* The recipe list to prepare cooking  */}
      {/* <Text style = {{alignSelf: 'center'}}>
            {route.params.name}
        </Text> */}

      <Text
        style={{
          alignSelf: "center",
          marginTop: 50,
          fontSize: 25,
          width: 250,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Ingredients for Dish
      </Text>

      <FlatList
        style={{ alignContent: "center" }}
        // Route.params.ingredients is going to the child of the route onto it reaches ingredients
        data={route.params.ingredients}
        renderItem={({ item }) => (
          <View>
            {/* Display the name of the ingredients ons the top of the screen */}
            <Text
              style={{
                color: "black",

                alignSelf: "center",
              }}
            >
              {" "}
              {item}{" "}
            </Text>
          </View>
        )}
      />
      <Text style={{ textAlign: "center", fontSize: 25 }}>Equipment</Text>
      <FlatList
        style={{ alignContent: "center" }}
        // Route.params.ingredients is going to the child of the route onto it reaches ingredients
        data={route.params.equipment}
        renderItem={({ item }) => (
          <View>
            {/* Display the name of the ingredients ons the top of the screen */}
            <Text
              style={{
                color: "black",

                alignSelf: "center",
              }}
            >
              {" "}
              {item}{" "}
            </Text>
          </View>
        )}
      />
      <View style={{ alignSelf: "center" }}>
        <TouchableOpacity
          style={{
            width: 234,
            alignItems: "center",
            height: 64,
            borderRadius: 15,
            elevation: 1,
            justifyContent: "center",

            flexDirection: "row",
            display: "flex",
            backgroundColor: "#5BBEB3",
            marginBottom: 120,
          }}

          onPress={() => {
            navigation.navigate('Both', {
              title: route.optionName,
              data: route.data,
              dataTwo: route.dataTwo,
              labels: route.labels,
            });
          }}
        >
          {/* Display the name of the category ons the top of the screen */}
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            ready to cook?{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RecipeListScreen;
