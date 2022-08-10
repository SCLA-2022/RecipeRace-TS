import React from 'react'
import { Button, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import CircularProgress, { CircularProgressWithChild } from 'react-native-circular-progress-indicator';

import { UserInformation } from '../../Data/UserData';

// This is the functionality of the buttons 
// Difficulty button (function) -> passed to Difficulty.js

const DifficultyCard = (props: any) => {
  const handleDifficultyPress = () => {
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

        {props.disable ?

          <TouchableOpacity disabled = {props.disable} style={styles.touch}>

            <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: 220, height: 146, marginTop: -37, borderRadius: 10 }}>
              <Text style={{ color: '#FEAD62', fontSize: 25, marginBottom: 19, fontFamily: 'BubblePop' }}> {props.titleName} </Text>
              <Image style={{ width: 52, height: 52 }} source={require('../../assets/lock.png')} />
            </View>

          </TouchableOpacity>

          : <TouchableOpacity disabled={props.disable} style={styles.touch} onPress={handleDifficultyPress} >
            <Text style={styles.textStyle}>{props.titleName}</Text>
            <View style={styles.progressEdit}>
              <CircularProgress
                clockwise={false}
                
                progressValueColor='white'
                activeStrokeColor={'white'}
                value={props.xp}
                delay={1000}
                radius={40}
              />
            </View>
          </TouchableOpacity>}
        {/* <TouchableOpacity disabled = {props.disable} style={styles.touch} onPress={handleDifficultyPress} >
          <Text style={styles.textStyle}>{props.titleName}</Text>
          <View style={styles.progressEdit}>
              <CircularProgress 
              clockwise={false}
              progressValueColor='white'
              activeStrokeColor={'white'}
              value={props.xp} 
              delay={1000} 
              radius={40}
              />
            </View>
        </TouchableOpacity> */}

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
    fontFamily: 'BubblePop',
   

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
    width: 244,
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