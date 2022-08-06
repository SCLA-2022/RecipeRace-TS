import React, {useState} from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import CircularProgress, { CircularProgressWithChild } from 'react-native-circular-progress-indicator';

import DifficultyCard from "../../components/Cards/DifficultyCard";

const DifficultyScreen = ({ navigation }: { navigation: any }) => {
  const [value, setValue] = useState(0);

  // this screen includes all stack navigation buttons
  // this is the first screen a user sees

  return (
    <View style={{ backgroundColor: "white", flex: 1,  }}>
      <Text style={styles.newText}>Choose Cooking Level</Text>
      <View style={styles.space}>
        <DifficultyCard
          style={styles.buttonstyles}
          navigation={navigation}
          titleName="Beginner"
        />
        
        
      </View>
      

      <View style={styles.space}>
        <DifficultyCard
          style={styles.buttonstyles}
          navigation={navigation}
          titleName="Intermediate"
        />
      </View>
      <View style={styles.space}>
        <DifficultyCard
          style={styles.buttonstyles}
          navigation={navigation}
          titleName="Advance"
        />
      </View>
    </View>
  );
};

export default DifficultyScreen;

const styles = StyleSheet.create({
  newText: {
    textAlign: 'center',
    marginTop: 60,
    marginBottom: -40,
    fontSize: 35,
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
  textStyle: { fontSize: 8, marginTop: -5 },

  progressEdit: {
    alignSelf: 'center',
    marginTop: -30,
    marginBottom: -70,
  }
});
