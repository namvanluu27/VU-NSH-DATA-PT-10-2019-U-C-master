var dataArr = [10, 21, 35, 20, 200, 5000];

console.log("min value", d3.min(dataArr));
console.log("max value", d3.max(dataArr));
console.log("min and max values", d3.extent(dataArr));

var testScores = [50, 90, 95, 75, 85];
var students = ["Han", "Sarah", "Matt", "Drew", "Bob"];

// var svgHeight = 1000;

// var yScale = d3
//   .scaleLinear()
//   .domain([0, d3.max(testScores)])
//   .range([0, svgHeight]);

// console.log(`50 returns ${yScale(50)}`);

// var yScale = d3
//   .scaleLinear()
//   .domain(d3.extent(testScores))
//   .range([0, svgHeight]);

// console.log(`50 returns ${yScale(50)}`);

var svgHeight = 600;
var svgWidth = 1000;

var xScale = d3
  .scaleBand()
  .domain(students)
  .range([0, svgWidth]);

console.log(xScale(students[1]));
console.log(`Each band is ${xScale.bandwidth()}`);

var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(testScores)])
  .range([0, svgHeight]);

console.log(yScale(testScores[0]));
