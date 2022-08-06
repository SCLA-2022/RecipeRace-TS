import React from 'react'
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import CircularProgress, { CircularProgressWithChild } from 'react-native-circular-progress-indicator';

// This is the functionality of the buttons 
// Difficulty button (function) -> passed to Difficulty.js

const DifficultyCard = (props) => {
    const handleDifficultyPress = (name, items) => {
        // console.log("tap", name),
        /* 
        used to navigate throughout different categories of furniture
        navigation is declared in the main component 
        */
          props.navigation.navigate(props.titleName, { title: props.titleName });
      };
  return (
    <View style={styles.container}>
      <View>
            
      
        <TouchableOpacity color='#FEAD62' style={styles.touch} onPress={handleDifficultyPress} title={props.titleName}>
          <Text style={styles.textStyle}>{props.titleName}</Text>
          <View style={styles.progressEdit}>
              <CircularProgress 
              clockwise={false}
              progressValueColor='white'
              activeStrokeColor={'white'}
              value={58} 
              delay={1000} 
              radius={40}
              />
            </View>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default DifficultyCard

const styles = StyleSheet.create({
    textStyle: {
      color: 'white',
      fontSize: 20,
      marginTop: -20,
    },
    touch: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      height: 173,
      borderRadius: 15,
      // elevation: 1,
      padding: 50,
      // marginHorizontal: -20,
      // flexDirection: 'row'
      backgroundColor: '#FEAD62',

    },
    container: {
      marginTop: 80,
      width: 234,
      alignSelf: 'center',
      
      // display: 'flex',
      // padding: 20,
      // backgroundColor: '#FEAD62',
      // marginVertical: 10,
      // width: 150,
      // height: 128,
      // borderRadius: 15,
      // elevation: 1,
      // alignItems: 'center',
      // justifyContent: "center",
      // marginHorizontal: 10,

      },
      progressEdit: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 0,
        
      }
  });