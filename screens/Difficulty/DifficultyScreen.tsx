import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import DifficultyCard from "../../components/Cards/DifficultyCard";
import { useAppSelector } from "../../store/hooks";
import { getUser } from "../../store/slices/userSlice";

const labels = ["Beginner", "Intermediate", "Advanced"];
const DifficultyScreen = ({ navigation }: { navigation: any }) => {
  const user = useAppSelector(getUser);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.newText}>Choose Cooking Level</Text>

      {labels.map((label) => {
        if (label === "Beginner")
          return (
            <View style={styles.space} key={label}>
              <DifficultyCard
                style={styles.buttonstyles}
                navigation={navigation}
                titleName={label}
                xp={user?.beginnerXp}
                disable={false}
              />
            </View>
          );
        if (label == "Intermediate")
          return (
            <View style={styles.space} key={label}>
              <DifficultyCard
                style={styles.buttonstyles}
                navigation={navigation}
                titleName={label}
                xp={user?.intermediate}
                disable={false}
              />
            </View>
          );

        return (
          <View style={styles.space} key={label}>
            <DifficultyCard
              style={styles.buttonstyles}
              navigation={navigation}
              titleName={label}
              xp={user?.advanced}
              disable={true}
            />
          </View>
        );
      })}
    </View>
  );
};

export default DifficultyScreen;

const styles = StyleSheet.create({
  newText: {
    textAlign: "center",
    marginTop: 60,
    marginBottom: -50,
    fontSize: 35,
    color: "#FEAD62",
    fontFamily: "BubblePop",
  },
  buttonstyles: {
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 60,
  },
  space: {
    height: 173,
    width: 234,
    marginBottom: 40,
    padding: 20,
    alignSelf: "center",
  },
  image: { width: 40, marginTop: -5 },
  textStyle: { fontSize: 8, marginTop: -5, fontFamily: "BubblePop" },

  progressEdit: {
    alignSelf: "center",
    marginTop: -30,
    marginBottom: -70,
  },
});
