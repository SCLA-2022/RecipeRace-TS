import React from 'react'
import {Text, View, TouchableHighlight, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
// import { FlatList } from 'react-native-web'
// import { View } from 'react-native-web'

const Intermediate = ({navigation}) => {
    const [categories, setCategories] = React.useState([
    {
        category: "Carrot",
        recepies: [
            {
                name: 'Carrot Cake',
                ingredients: ['milk', 'carrot', 'sugar', 'spices', 'more carrots', 'plate']
            },
            {
                name: 'something else',
                ingredients: ['any', 'something', 'carrot']
            }
        ]       
    },
    {
        category: 'Apple',
        recepies: [
            {
                name: 'Apple Cake',
                ingredients: ['milk', 'apple', 'sugar', 'spices', 'more appple', 'plate']
            },
            {
                name: 'something else',
                ingredients: ['any', 'something', 'apple']
            }
        ]
    },
    {
        category: 'huevos',
        recepies: [
            {
                name: 'Huevo Cake',
                ingredients: ['huevo', 'carrot', 'sugar', 'spices', 'more huevos', 'plate']
            },
            {
                name: 'something else',
                ingredients: ['any', 'something', 'huevo']
            }
        ]
    },
    {
        category: 'bread',
        recepies: [
            {
                name: 'bread Cake',
                ingredients: ['milk', 'bread', 'sugar', 'spices', 'more bread', 'plate']
            },
            {
                name: 'something else',
                ingredients: ['any', 'something', 'bread']
            }
        ]
    }

])

  return (
    <View style = {{flex: 1}}>
        <FlatList
            data = {categories}

            ListHeaderComponent = {
                <>
                  <Text style = {{alignSelf: 'center'}}> Intermediate </Text>
                </>
              }

            columnWrapperStyle = {styles.row}
            numColumns = {2}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style = {{backgroundColor: 'grey', height: 100, width: 100, borderRadius: 20}}
                    onPress = {() => navigation.navigate('FoodList', item)}>
                  {/* Display the name of the category ons the top of the screen */}
                  <Text style = {{color: 'white', alignSelf:'center'}}> {item.category} </Text>
                </TouchableOpacity>
              )}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginTop: 20
        // backgroundColor: 'red'
    },
})
export default Intermediate