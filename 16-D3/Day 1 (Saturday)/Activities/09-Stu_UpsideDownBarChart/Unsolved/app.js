// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

// Append an SVG wrapper to the page and set a variable equal to a reference to it
// YOUR CODE HERE
var svgHeight = 200;
var svgWidth = 400;

var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Vertical Bar Chart
// svg
//   .selectAll("rect")
//   .data(booksReadThisYear)
//   .enter()
//   .append("rect")
//   .classed("bar", true)
//   .attr("width", 50)
//   .attr("height", function(data) {
//     return data;
//   })
//   .attr("x", function(data, index) {
//     return index * 60;
//   });

// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE
// svg
//   .selectAll("rect")
//   .data(booksReadThisYear)
//   .enter()
//   .append("rect")
//   .classed("bar", true)
//   .attr("width", 50)
//   .attr("height", function(data) {
//     return data;
//   })
//   .attr("x", 0)
//   .attr("y", function(data, index) {
//     return index * 60;
//   });

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
svg
  .selectAll("rect")
  .data(booksReadThisYear)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("height", function(data) {
    return data;
  })
  .attr("x", function(data, index) {
    return index * 60;
  })
  .attr("y", function(data) {
    return svgHeight - data;
  });
