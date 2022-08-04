import React from 'react'
import {Text, View, TouchableHighlight, TouchableOpacity, FlatList, StyleSheet, Image} from 'react-native'
import BeginnerCard from '../../Cards/BeginnerCard';
import VideoCard from '../../Cards/VideoCard'
// import { FlatList } from 'react-native-web'
// import { View } from 'react-native-web'



const Beginner = ({navigation}) => {

// FoodList IMAGES

// quesadilla
let Food1 = require('../../assets/RegularQ.png');
let Food2 = require('../../assets/VeganQ.png');

// egg
let Food3 = require('../../assets/RegularEgg.png');
let Food4 = require('../../assets/VeganEgg.png');

// spagetti
let Food5 = require('../../assets/RegularS.jpeg');
let Food6 = require('../../assets/VeganS.png');

// salad
let Food7 = require('../../assets/RegularSalad.jpeg');
let Food8 = require('../../assets/VeganSalad.png');

// rice
let Food9 = require('../../assets/VeganFriedRice.png');


// ADDING FOOD IMAGES FOR CATEGORIES
// let Food7 = require('../../assets/Oaxaca-M-Q.png');
// let Food8 = require('../../assets/basic-Q.png');
// let Food9 = require('../../assets/fancy-Q.png');
// let Food10 = require('../../assets/cali-mex-quesadillas.png');
// let Food11 = require('../../assets/Veggie-Q.png');
// let Food12 = require('../../assets/spicy-chicken-quesadilla-menuitem.png');


// ADDING FOOD OPTIONS FOR THE FOOD CATEGORY
    const [categories, setCategories] = React.useState([
    {
        
        category: "Quesadilla",
        image: Food1,
        recepies: [
            {
                name: '',
                labels: [],

                ingredients: ['any', 'something', 'carrot'],
                equipment:
                [],
                imagerecipe: Food7,


                video: "",
                recipe: [],
            },
            {
                name: '',
                labels: [],

                ingredients: ['any', 'something', 'carrot'],
                equipment:
                [],
                imagerecipe: Food7,


                video: "",
                recipe: [],
            }
        ]       
    },
    {
        category: 'Egg',
        image: Food2,
        recepies: [
            {
                name: '',
                labels: [],

                ingredients: ['any', 'something', 'carrot'],
                equipment:
                [],
                imagerecipe: Food7,


                video: "",
                recipe: [],
            },
            {
                name: '',
                labels: [],

                ingredients: ['any', 'something', 'carrot'],
                equipment:
                [],
                imagerecipe: Food7,


                video: "",
                recipe: [],
            }
        ]
    },
    {
        category: 'Spagetti',
        image: Food3,
        recepies: [
            {
                name: '',
                labels: [],

                ingredients: ['any', 'something', 'carrot'],
                equipment:
                [],
                imagerecipe: Food7,


                video: "",
                recipe: [],
            },
            {
                name: '',
                labels: [],

                ingredients: ['any', 'something', 'carrot'],
                equipment:
                [],
                imagerecipe: Food7,


                video: "",
                recipe: [],
            }
        ]
    },
    {
        category: 'Salad',
        image: Food6,
        recepies: [
            
            {
                name: 'Regular Salad',
                labels: [
                    "Vegetable", 
                    "Leaf vegetable", 
                    "Vegetarian food", 
                    "Plant",
                ],
                ingredients: ["2 English cucumbers (sliced thinly)",
                    "pinch of salt",
                    "1 red onion (sliced thinly)",
                    "1/2 cup water",
                    "1 cup vinegar (distilled)",
                    "1/2 cup granulated sugar",
                    "2 1/2 tbsp fresh dill (minced)"],
                equipment: ["N/A"],
                imagerecipe: Food8,

                video: "",
                recipe: [],
            },
            {
                name: 'Vegan Salad',
                labels: ["quesadilla", "mexican food"],
                ingredients: ["900g new potatoes",
                "2 celery sticks",
                "1 red pepper",
                "8 spring onions",
                "8 small pickled gherkins",
                "4 tbsp capers",
                "1 lemon",
                "10g fresh dill",
                "10g fresh parsley",
                "10g fresh mint",
                "10g fresh coriander",
                "125g egg free mayo",
                "3/4 tsp salt plus extra",],
                equipment:
                ["Large pan",
                "Large mixing bowl",],
            
                imagerecipe: Food7,

                video: "",
                recipe: [],
            },
            
        ]
    },
    {
        category: "Pasta",
        image: Food5,
        recepies: [
            {
                name: 'Vegan Salad',
                labels: [],
                ingredients: ["900g new potatoes",
                "2 celery sticks",
                "1 red pepper",
                "8 spring onions",
                "8 small pickled gherkins",
                "4 tbsp capers",
                "1 lemon",
                "10g fresh dill",
                "10g fresh parsley",
                "10g fresh mint",
                "10g fresh coriander",
                "125g egg free mayo",
                "3/4 tsp salt plus extra",],
                equipment:
                ["Large pan",
                "Large mixing bowl",],
            
                imagerecipe: Food7,

                video: "",
                recipe: [],
            },
            {
                name: 'Vegan Salad',
                labels: [],
                ingredients: ["900g new potatoes",
                "2 celery sticks",
                "1 red pepper",
                "8 spring onions",
                "8 small pickled gherkins",
                "4 tbsp capers",
                "1 lemon",
                "10g fresh dill",
                "10g fresh parsley",
                "10g fresh mint",
                "10g fresh coriander",
                "125g egg free mayo",
                "3/4 tsp salt plus extra",],
                equipment:
                ["Large pan",
                "Large mixing bowl",],
            
                imagerecipe: Food7,

                video: "",
                recipe: [],
            },
        ]       
    },
    {
        category: 'Cereals',
        image: Food6,
        recepies: [
            {
                name: 'Vegan Salad',
                labels: [],
                ingredients: ["900g new potatoes",
                "2 celery sticks",
                "1 red pepper",
                "8 spring onions",
                "8 small pickled gherkins",
                "4 tbsp capers",
                "1 lemon",
                "10g fresh dill",
                "10g fresh parsley",
                "10g fresh mint",
                "10g fresh coriander",
                "125g egg free mayo",
                "3/4 tsp salt plus extra",],
                equipment:
                ["Large pan",
                "Large mixing bowl",],
            
                imagerecipe: Food7,

                video: "",
                recipe: [],
            },
            {
                name: 'Vegan Salad',
                labels: ["quesadilla"],
                ingredients: ["900g new potatoes",
                "2 celery sticks",
                "1 red pepper",
                "8 spring onions",
                "8 small pickled gherkins",
                "4 tbsp capers",
                "1 lemon",
                "10g fresh dill",
                "10g fresh parsley",
                "10g fresh mint",
                "10g fresh coriander",
                "125g egg free mayo",
                "3/4 tsp salt plus extra",],
                equipment:
                ["Large pan",
                "Large mixing bowl",],
            
                imagerecipe: Food7,

                video: "",
                recipe: [],
            },
        ]
    },
])


  return (
    <View style = {{flex: 1, backgroundColor: 'white'}}>
        <FlatList
            data = {categories}

            ListHeaderComponent = {
                <>
                  <Text style = {{
                        alignSelf: 'center',
                        marginTop: 60,
                        fontSize: 28,
                        
                    
                    }}> Beginner </Text>
                </>
              }
            columnWrapperStyle = {styles.row}
            numColumns = {2}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style = {{
                        backgroundColor: 'grey', 
                        height: 164, 
                        width: 188, 
                        borderRadius: 10, 
                        backgroundColor: '#5BBEB3', 
                        borderColor: '#5BBEB3'}}
                    onPress = {() => navigation.navigate('FoodList', item)}>
                  {/* Display the name of the category ons the top of the screen */}
                  <Image source = { item.image } style = {{
                        width: 188, 
                        height: 126, 
                        borderRadius: 10, 
                        borderWidth: 2, 
                        borderColor: '#5BBEB3',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    }} />
                  <Text style = {{
                            color: 'white', 
                            alignSelf:'flex-start',
                            marginTop: 7,

                            
                                }}> {item.category} </Text>
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
        marginTop: 20,
        // backgroundColor: 'red'
    },
})
export default Beginner