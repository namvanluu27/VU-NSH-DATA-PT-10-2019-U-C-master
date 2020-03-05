// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
var descSort = numArray.sort(function sortDescFunction(a, b) {
  return b - a;
});

// Print the results to the console
console.log(descSort);

// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console
var descArrowSort = numArray.sort((a, b) => b - a);
console.log(descArrowSort);

// Reverse the array order
var reversedSort = descArrowSort.reverse();
console.log(reversedSort);

// Sort the array in ascending order using an arrow function
var ascendSort = numArray.sort((a, b) => a - b);
console.log(ascendSort);

// Slice the first five elements of the sortedAscending array, assign to a variable
var slicedArray = ascendSort.slice(0, 5);
console.log(slicedArray);