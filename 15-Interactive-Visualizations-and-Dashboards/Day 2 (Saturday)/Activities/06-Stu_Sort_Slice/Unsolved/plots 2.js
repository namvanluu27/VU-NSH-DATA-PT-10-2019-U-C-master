// Sort the data by Greek search results
var sortGreekSearch = data.sort(function(a, b) {
    return b.greekSearchResults - a.greekSearchResults;
});

console.log(sortGreekSearch)

// Slice the first 10 objects for plotting
var slicedGreek = sortGreekSearch.slice(0, 10); 

// Reverse the array to accommodate Plotly's defaults
var reversedGreek = slicedGreek.reverse();

console.log(reversedGreek);


// Trace1 for the Greek Data
var trace1 = {
    x: reversedGreek.map(item => item.greekSearchResults),
    y: reversedGreek.map(item => item.greekName),
    type: "bar",
    orientation: "h"
};


// data
var data = [trace1];


// Apply the group bar mode to the layout
var layout = {
    title: "Greek God Search Results"
};


// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);