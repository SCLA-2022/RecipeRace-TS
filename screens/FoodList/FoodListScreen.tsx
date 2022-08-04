import React from 'react'
import { Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
// import { FlatList } from 'react-native-web'

const FoodListScreen = ({navigation, route}) => {


  return (
    // Food Lists that one can cook
    <>
    {/* Making a list of columns that include foods after going through Difficulty  */}
      <FlatList
        numColumns={2}
        columnWrapperStyle = {styles.row}

        data = {route.params.recepies}

        ListHeaderComponent = {
          <>
            <Text style = {{
              alignSelf: 'center',
              marginTop: 60,
              fontSize: 28,
            }}> {route.params.category} </Text>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity 
              style = {{ 
                        height: 164, 
                        width: 188, 
                        borderRadius: 10, 
                        backgroundColor: '#5BBEB3', 
                        borderColor: '#5BBEB3'
              }}
              onPress = {() => navigation.navigate('RecipeList', item)}
              >
            <Image source = { item.imagerecipe } style = {{
                       width: 188, 
                       height: 126, 
                       borderRadius: 10, 
                       borderWidth: 2, 
                       borderColor: '#5BBEB3',
                       borderBottomLeftRadius: 0,
                       borderBottomRightRadius: 0,
                    }} />
            {/* Display the name of the category ons the top of the screen */}
            <Text style = {{
              color: 'white', 
              alignSelf:'flex-start',
              marginTop: 7,
              }}>
                 {item.name} 
            </Text>
            
          </TouchableOpacity>
        )} 
      />
    </>
  )
}

const styles = StyleSheet.create({
  row: {
      flex: 1,
      justifyContent: 'space-evenly',
      marginTop: 20
      // backgroundColor: 'red'
  },
  label: {
    backgroundColor: 'light-grey',

  }
})

export default FoodListScreen