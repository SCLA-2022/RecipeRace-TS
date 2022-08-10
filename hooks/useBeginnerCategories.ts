import React from "react";

// FoodList IMAGES

// quesadilla
let Food1 = require("../assets/RegularQ.png");
let Food2 = require("../assets/VeganQ.png");

// egg
let Food3 = require("../assets/RegularEgg.png");
let Food4 = require("../assets/VeganEgg.png");

// spagetti
let Food5 = require("../assets/RegularS.jpeg");
let Food6 = require("../assets/VeganS.png");

// salad
let Food7 = require("../assets/RegularSalad.jpeg");
let Food8 = require("../assets/VeganSalad.png");

// rice
let Food9 = require("../assets/VeganFriedRice.png");

// ADDING FOOD IMAGES FOR CATEGORIES
// let Food7 = require('../../assets/Oaxaca-M-Q.png');
// let Food8 = require('../../assets/basic-Q.png');
// let Food9 = require('../../assets/fancy-Q.png');
// let Food10 = require('../../assets/cali-mex-quesadillas.png');
// let Food11 = require('../../assets/Veggie-Q.png');
// let Food12 = require('../../assets/spicy-chicken-quesadilla-menuitem.png');

export default function useBeginnerCategories() {
  // ADDING FOOD OPTIONS FOR THE FOOD CATEGORY
  const [categories, setCategories] = React.useState([
    {
      category: "Quesadilla",
      image: Food1,
      recipies: [
        {
          name: "",
          labels: [],

          ingredients: ["any", "something", "carrot"],
          equipment: [],
          imagerecipe: Food7,

          video: "",
          recipe: [
            "Heat the tortillas until air pockets form",
            "Add the cheese and other ingredients",
            "Lower the heat and cover pan",
            "Fold the tortilla over",
            "Remove quesadilla from pan and cut into wedges",
          ],
        },
        {
          name: "",
          labels: [],

          ingredients: ["any", "something", "carrot"],
          equipment: [],
          imagerecipe: Food7,

          video: "",
          recipe: [],
        },
      ],
    },
    {
      category: "Egg",
      image: Food2,
      recipies: [
        {
          name: "",
          labels: [],

          ingredients: ["any", "something", "carrot"],
          equipment: [],
          imagerecipe: Food7,

          video: "",
          recipe: [],
        },
        {
          name: "",
          labels: [],

          ingredients: ["any", "something", "carrot"],
          equipment: [],
          imagerecipe: Food7,

          video: "",
          recipe: [],
        },
      ],
    },
    {
      category: "Spagetti",
      image: Food3,
      recipies: [
        {
          name: "",
          labels: [],

          ingredients: ["any", "something", "carrot"],
          equipment: [],
          imagerecipe: Food7,

          video: "",
          recipe: [],
        },
        {
          name: "",
          labels: [],

          ingredients: ["any", "something", "carrot"],
          equipment: [],
          imagerecipe: Food7,

          video: "",
          recipe: [],
        },
      ],
    },
    {
      category: "Salad",
      image: Food6,
      recipies: [
        {
          name: "Regular Salad",
          labels: ["Vegetable", "Leaf vegetable", "Vegetarian food", "Plant"],
          ingredients: [
            "2 English cucumbers (sliced thinly)",
            "pinch of salt",
            "1 red onion (sliced thinly)",
            "1/2 cup water",
            "1 cup vinegar (distilled)",
            "1/2 cup granulated sugar",
            "2 1/2 tbsp fresh dill (minced)",
          ],
          equipment: ["N/A"],
          imagerecipe: Food8,

          video: "",
          recipe: [],
        },
        {
          name: "Vegan Salad",
          labels: ["quesadilla", "mexican food"],
          ingredients: [
            "900g new potatoes",
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
            "3/4 tsp salt plus extra",
          ],
          equipment: ["Large pan", "Large mixing bowl"],

          imagerecipe: Food7,

          video: "",
          recipe: [],
        },
      ],
    },
    // {
    //   category: "Pasta",
    //   image: Food5,
    //   recepies: [
    //     {
    //       name: "Vegan Salad",
    //       labels: [],
    //       ingredients: [
    //         "900g new potatoes",
    //         "2 celery sticks",
    //         "1 red pepper",
    //         "8 spring onions",
    //         "8 small pickled gherkins",
    //         "4 tbsp capers",
    //         "1 lemon",
    //         "10g fresh dill",
    //         "10g fresh parsley",
    //         "10g fresh mint",
    //         "10g fresh coriander",
    //         "125g egg free mayo",
    //         "3/4 tsp salt plus extra",
    //       ],
    //       equipment: ["Large pan", "Large mixing bowl"],

    //       imagerecipe: Food7,

    //       video: "",
    //       recipe: [],
    //     },
    //     {
    //       name: "Vegan Salad",
    //       labels: [],
    //       ingredients: [
    //         "900g new potatoes",
    //         "2 celery sticks",
    //         "1 red pepper",
    //         "8 spring onions",
    //         "8 small pickled gherkins",
    //         "4 tbsp capers",
    //         "1 lemon",
    //         "10g fresh dill",
    //         "10g fresh parsley",
    //         "10g fresh mint",
    //         "10g fresh coriander",
    //         "125g egg free mayo",
    //         "3/4 tsp salt plus extra",
    //       ],
    //       equipment: ["Large pan", "Large mixing bowl"],

    //       imagerecipe: Food7,

    //       video: "",
    //       recipe: [],
    //     },
    //   ],
    // },
    // {
    //   category: "Cereals",
    //   image: Food6,
    //   recepies: [
    //     {
    //       name: "Vegan Salad",
    //       labels: [],
    //       ingredients: [
    //         "900g new potatoes",
    //         "2 celery sticks",
    //         "1 red pepper",
    //         "8 spring onions",
    //         "8 small pickled gherkins",
    //         "4 tbsp capers",
    //         "1 lemon",
    //         "10g fresh dill",
    //         "10g fresh parsley",
    //         "10g fresh mint",
    //         "10g fresh coriander",
    //         "125g egg free mayo",
    //         "3/4 tsp salt plus extra",
    //       ],
    //       equipment: ["Large pan", "Large mixing bowl"],

    //       imagerecipe: Food7,

    //       video: "",
    //       recipe: [],
    //     },
    //     {
    //       name: "Vegan Salad",
    //       labels: ["quesadilla"],
    //       ingredients: [
    //         "900g new potatoes",
    //         "2 celery sticks",
    //         "1 red pepper",
    //         "8 spring onions",
    //         "8 small pickled gherkins",
    //         "4 tbsp capers",
    //         "1 lemon",
    //         "10g fresh dill",
    //         "10g fresh parsley",
    //         "10g fresh mint",
    //         "10g fresh coriander",
    //         "125g egg free mayo",
    //         "3/4 tsp salt plus extra",
    //       ],
    //       equipment: ["Large pan", "Large mixing bowl"],

    //       imagerecipe: Food7,

    //       video: "",
    //       recipe: [],
    //     },
    // ],
    // },
  ]);

  return { categories };
}
