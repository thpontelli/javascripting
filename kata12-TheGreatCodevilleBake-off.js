const ingredientCheck = function(bakery, recipeIngredients) {
  for (let i = 0; i < bakery.length; i++) {
    if (bakery[i] === recipeIngredients) {
      return true
    } 
  }
  return false
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  
  for (const recipe of recipes) {
    if (ingredientCheck(bakeryA, recipe.ingredients[0]) || (ingredientCheck(bakeryB, recipe.ingredients[0]))) {
      if (ingredientCheck(bakeryA, recipe.ingredients[1]) || (ingredientCheck(bakeryB, recipe.ingredients[1]))) {
        return recipe.name
      }
    }
  }
  return false
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
