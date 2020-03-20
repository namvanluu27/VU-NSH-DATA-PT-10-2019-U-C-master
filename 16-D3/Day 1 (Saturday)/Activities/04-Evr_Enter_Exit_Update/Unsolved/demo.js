var austinTemps = [30, 59, 59, 21, 146];

d3.select("#content")
  .selectAll(".temps")
  .data(austinTemps)
  .style("height", function(data) {
    return data + "px";
  });

d3.select("#content")
  .selectAll(".temps")
  .data(austinTemps)
  .enter()
  .append("div")
  .classed("temps", true)
  .style("height", function(data) {
    return data + "px";
  });

var selection = d3
  .select("#content")
  .selectAll(".temps")
  .data(austinTemps);

console.log(selection);

selection
  .enter()
  .append("div")
  .classed("temps", true);
