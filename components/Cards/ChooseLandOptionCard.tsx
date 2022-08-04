import React from 'react'
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native'




// This is the functionality of the buttons 
// Difficulty button (function) -> passed to Difficulty.js

const ChooseLandOptionCard = (props) => {

    const handleDifficultyPress = (name, items) => {
        // console.log("tap", name),
        /* 
        used to navigate throughout different categories of furniture
        navigation is declared in the main component 
        */
          props.navigation.navigate(props.optionName, { title: props.optionName, data: props.data, dataTwo: props.dataTwo });
      };

  return (
    <>
   
    <View style={{marginTop: 100,}}>
      
        <TouchableOpacity style={styles.touch} onPress={handleDifficultyPress} title={props.optionName}>
          <Text style={{color: 'white'}}>{props.optionName}</Text>
        </TouchableOpacity>
        
    </View>
  </>
  )
}

export default ChooseLandOptionCard

const styles = StyleSheet.create({
    container: {
        padding: 20,
          backgroundColor: '#48d1cc',
          marginVertical: 10,
          width: 150,
          height: 128,
          borderRadius: 15,
          elevation: 1,
          alignItems: 'center',
          justifyContent: "center",
          marginHorizontal: 10,
          flexDirection: 'row',
          display: 'flex',
          
          

      },
      touch: {
        width: 234,
        alignItems: 'center',
        height: 64,
        borderRadius: 15,
        elevation: 1,
        justifyContent: "center",
        marginHorizontal: -20,
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: '#5BBEB3',
        
        
  
      },
  });