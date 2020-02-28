// Array of recipe objects
var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }
];
console.log(recipes);
var dishes = [];
var spices = [];
recipes.forEach((recipe) => {
  Object.entries(recipe).forEach(([key, value]) => {
    if (key === "dish") {
      dishes.push(value);
    }
    else {
      spices.push(value);
    }
  });
});
console.log(dishes);
console.log(spices);
// @TODO: YOUR CODE HERE
var dishesMapped = recipes.map(recipe => recipe.dish);
var spicesMapped = recipes.map(recipe => recipe.spice);
console.log(dishesMapped);
console.log(spicesMapped);