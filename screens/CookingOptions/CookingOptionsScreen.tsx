import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CookingOptionsCard from "../../components/Cards/CookingOptionsCard";

const CookingOptionsScreen = ({ navigation, route }: {navigation:any, route:any}) => {
  // this screen includes all stack navigation buttons
  // this is the first screen a user sees



  return (
    <View style={styles.container}>
      <Text style={styles.touch}>Choose option to cook from</Text>

      <View>
        <CookingOptionsCard
          style={styles.buttonstyles}
          navigation={navigation}
          optionName="Both"
          data={route.params.video}
          dataTwo={route.params.recipe}
          labels={route.params.labels}
        />
      </View>
      <View>
        <CookingOptionsCard
          style={styles.buttonstyles}
          navigation={navigation}
          optionName="Video"
          data={route.params.video}
          dataTwo={route.params.recipe}
          labels={route.params.labels}
        />
      </View>
      <View>
        <CookingOptionsCard
          style={styles.buttonstyles}
          navigation={navigation}
          optionName="Step by Step"
          data={route.params.video}
          dataTwo={route.params.recipe}
          labels={route.params.labels}
        />
      </View>
    </View>
  );
};

export default CookingOptionsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  buttonstyles: {
    justifyContent: "center",
    alignSelf: "center",
  },
  space: {
    height: 200,
    width: 234,
    marginBottom: -100,
    padding: 20,
    alignSelf: "center",
    backgroundColor: "red",
  },
  touch: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    marginBottom: 10,
    marginTop: 60,
    alignSelf: "center",
    fontSize: 25,
    width: 200,
    alignItems: "center",
    textAlign: "center",
  },
});
