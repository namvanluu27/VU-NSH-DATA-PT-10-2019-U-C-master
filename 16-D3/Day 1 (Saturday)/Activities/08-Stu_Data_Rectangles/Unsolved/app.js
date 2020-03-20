// Data which we will be using to build our rectangle
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("height", 600)
  .attr("width", 400);

// Append a rectangle and set its height in relation to the booksReadThisYear value

svg
  .append("rect")
  .classed("bar", true)
  .data(booksReadThisYear)
  .attr("width", 45)
  .attr("height", function(data) {
    return data * 10;
  });
