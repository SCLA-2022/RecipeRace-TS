import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import DifficultyCard from '../../Cards/DifficultyCard'

const DifficultyScreen = ({ navigation }) => {
    
// this screen includes all stack navigation buttons 
// this is the first screen a user sees

  return (
    
    <View style={{backgroundColor: 'white'}}>
        <View style={styles.space}>
            <DifficultyCard style={styles.buttonstyles} navigation={navigation} titleName="Beginner" />
            
        </View>
            <View style={styles.space}>
            <DifficultyCard style={styles.buttonstyles} navigation={navigation} titleName="Intermediate" />
            
        </View>
        <View style={styles.space}>
            <DifficultyCard style={styles.buttonstyles} navigation={navigation} titleName="Advance" />
            
        </View>
    </View>
    
  )
}

export default DifficultyScreen

const styles = StyleSheet.create({
    buttonstyles: {
        justifyContent: 'center',
        alignSelf: 'center',


    },
    space: {
        height: 200,
        width: 234,
        marginBottom: 20,
        padding: 20,
        alignSelf: 'center'
        
    }
  });
  
