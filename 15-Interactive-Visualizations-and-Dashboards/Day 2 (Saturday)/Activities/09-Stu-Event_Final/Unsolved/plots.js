// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// @ADD YOUR CODE HERE
var labels = Object.keys(data.us);

function init() {
    var trace1 = {
        values: us,
        labels: labels,
        type: "pie"
    };

    var data = [trace1]

    var layout = {
        title: "Musical Pies"
    };

    Plotly.newPlot("pie", data, layout)
}
  
d3.selectAll("#selectOption").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selectOption");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");

  // Initialize x and y arrays
  data = [];

  if (dataset === 'us') {
    data = us;
    
  }

  else if (dataset === 'uk') {
    data = uk;

  }

  else if (dataset == 'canada') {
    data = canada;

  }

  // Note the extra brackets around 'x' and 'y'
  Plotly.restyle("pie", "values", [data]);

}

init();
