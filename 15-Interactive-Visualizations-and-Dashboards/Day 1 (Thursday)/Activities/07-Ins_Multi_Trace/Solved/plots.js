

var greekTrace = {
  x: data.map(god => god.pair),
  y: data.map(god => god.greekSearchResults),
  type: "bar",
  name: "Greek"
};



var romanTrace = {
  x: data.map(god => god.pair),
  y: data.map(god => god.romanSearchResults),
  type: "bar",
  name: "Roman"
};

// The data array consists of both traces
var data = [greekTrace, romanTrace];

var layout = {
  title: "Greek vs Roman Gods",
  barmode: "group",
};

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data, layout);
