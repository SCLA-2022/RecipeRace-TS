import React from "react";

export default function useIntermediateRecipeList() {
  const [categories, setCategories] = React.useState([
    {
      category: "Carrot",
      recepies: [
        {
          name: "Carrot Cake",
          ingredients: [
            "milk",
            "carrot",
            "sugar",
            "spices",
            "more carrots",
            "plate",
          ],
        },
        {
          name: "something else",
          ingredients: ["any", "something", "carrot"],
        },
      ],
    },
    {
      category: "Apple",
      recepies: [
        {
          name: "Apple Cake",
          ingredients: [
            "milk",
            "apple",
            "sugar",
            "spices",
            "more appple",
            "plate",
          ],
        },
        {
          name: "something else",
          ingredients: ["any", "something", "apple"],
        },
      ],
    },
    {
      category: "huevos",
      recepies: [
        {
          name: "Huevo Cake",
          ingredients: [
            "huevo",
            "carrot",
            "sugar",
            "spices",
            "more huevos",
            "plate",
          ],
        },
        {
          name: "something else",
          ingredients: ["any", "something", "huevo"],
        },
      ],
    },
    {
      category: "bread",
      recepies: [
        {
          name: "bread Cake",
          ingredients: [
            "milk",
            "bread",
            "sugar",
            "spices",
            "more bread",
            "plate",
          ],
        },
        {
          name: "something else",
          ingredients: ["any", "something", "bread"],
        },
      ],
    },
  ]);

  return { categories };
}
