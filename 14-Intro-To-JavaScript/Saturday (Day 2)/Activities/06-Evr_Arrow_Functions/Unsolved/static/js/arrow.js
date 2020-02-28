// The Stages of JavaScript
var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];
var mapSimpleArray = theStagesOfJS.map((item) => {
  return item;
});
var mapSimpleArray1 = theStagesOfJS.map(item => item);
let variableName = [];
const anotherName = [];
console.log(mapSimpleArray);
console.log(mapSimpleArray1);
var students = [
  { name: "Kayla", score: 80},
  { name: "Alecia", score: 99},
  { name: "Chassity", score: 75},
  { name: "Jasmine", score: 55}
];
var names = students.map((student) => {
  return student.name;
});
var scores = students.map((student) => {
  return student.score;
});
// Challenge Activity
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];
// // Log the name of each princess, follow by a colon, followed by their age
// // Hint: use forEach
// princesses.forEach(function(princess) {
//   console.log(`${princess.name}: ${princess.age}`);
// });
// Create an array of just the names from the princesses array
// Hint: use map
var princessNames = princesses.map(function(princess) {
  return princess.name;
})
var princessNames1 = princesses.map(princess => princess.name);
console.log("names: ", names);