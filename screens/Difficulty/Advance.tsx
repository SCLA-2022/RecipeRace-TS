import React from 'react'
import {Text, View, TouchableHighlight, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
// import { FlatList } from 'react-native-web'
// import { View } from 'react-native-web'

const Advance = ({navigation, route}) => {
    const [categories, setCategories] = React.useState([
    {
        category: "Steak",
        recepies: [
            {
                name: 'Filèt menu',
                ingredients: ['milk', 'carrot', 'sugar', 'spices', 'more carrots', 'plate']
            },
            {
                name: 'BEEF',
                ingredients: ['any', 'something', 'carrot']
            }
        ]       
    },
    {
        category: 'jfioerjgegjeij',
        recepies: [
            {
                name: 'no way',
                ingredients: ['milk', 'apple', 'sugar', 'spices', 'more appple', 'plate']
            },
            {
                name: 'yikers ',
                ingredients: ['any', 'something', 'apple']
            }
        ]
    },
    {
        category: 'gordon ramsay level',
        recepies: [
            {
                name: 'Golden Steak',
                ingredients: ['huevo', 'carrot', 'sugar', 'spices', 'more huevos', 'plate']
            },
            {
                name: 'The Pigs from Angry birds',
                ingredients: ['any', 'something', 'huevo']
            }
        ]
    },
    {
        category: 'bread',
        recepies: [
            {
                name: 'breads',
                ingredients: ['milk', 'bread', 'sugar', 'spices', 'more bread', 'plate']
            },
            {
                name: 'bread with flavor',
                ingredients: ['any', 'something', 'bread']
            }
        ]
    },
    {
        category: "Steak",
        recepies: [
            {
                name: 'Filèt menu',
                ingredients: ['milk', 'carrot', 'sugar', 'spices', 'more carrots', 'plate']
            },
            {
                name: 'BEEF',
                ingredients: ['any', 'something', 'carrot']
            }
        ]       
    },
    {
        category: 'jfioerjgegjeij',
        recepies: [
            {
                name: 'no way',
                ingredients: ['milk', 'apple', 'sugar', 'spices', 'more appple', 'plate']
            },
            {
                name: 'yikers ',
                ingredients: ['any', 'something', 'apple']
            }
        ]
    },
    {
        category: 'gordon ramsay level',
        recepies: [
            {
                name: 'Golden Steak',
                ingredients: ['huevo', 'carrot', 'sugar', 'spices', 'more huevos', 'plate']
            },
            {
                name: 'The Pigs from Angry birds',
                ingredients: ['any', 'something', 'huevo']
            }
        ]
    },
    {
        category: 'bread',
        recepies: [
            {
                name: 'breads',
                ingredients: ['milk', 'bread', 'sugar', 'spices', 'more bread', 'plate']
            },
            {
                name: 'bread with flavor',
                ingredients: ['any', 'something', 'bread']
            }
        ]
    }
    
    

])

  return (
    <>
    <TouchableOpacity 
                    style = {{backgroundColor: 'grey', height: 128, width: 169, borderRadius: 20}}
                    onPress = {() => navigation.navigate('FoodList', item)}>
                  {/* Display the name of the category ons the top of the screen */}
                  <Text style = {{color: 'white', alignSelf:'center'}}> </Text>
                </TouchableOpacity>
    <View style = {{flex: 1}}>
        
        <FlatList
            data = {categories}
            ListHeaderComponent = {
                <>
                  <Text style = {{alignSelf: 'center'}}> Advance </Text>
                </>
              }
            columnWrapperStyle = {styles.row}
            numColumns = {2}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style = {{backgroundColor: 'grey', height: 128, width: 169, borderRadius: 20}}
                    onPress = {() => navigation.navigate('FoodList', item)}>
                  {/* Display the name of the category ons the top of the screen */}
                  <Text style = {{color: 'white', alignSelf:'center'}}> {item.category} </Text>
                </TouchableOpacity>
              )}
        />
    </View>
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
})
export default Advance