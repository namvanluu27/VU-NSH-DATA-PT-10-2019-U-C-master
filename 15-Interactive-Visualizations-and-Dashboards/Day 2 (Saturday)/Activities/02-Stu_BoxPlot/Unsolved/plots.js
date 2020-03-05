// @TODO: YOUR CODE HERE
var newYork = temps.newyork;
var houston = temps.houston;

var trace1 = {
    y: newYork,
    name: "New York",
    type: "box"
};

var trace2 = {
    y: houston,
    name: "Houston",
    type: "box"
};

var data = [trace1, trace2];

var layout = {
    title: "Temperature in New York and Houston"
};

Plotly.newPlot("plot", )