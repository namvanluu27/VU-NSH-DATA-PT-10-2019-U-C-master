var arr = [50, 55, 53];

list_items = d3.select("ul").selectAll("li");

// console.log("List items: ", list_items);

// d3.select("ul")
//   .selectAll("li")
//   .each(function(data, index) {
//     console.log("element", this);
//     console.log("data", data);
//     console.log("index", index);
//   });

var short_array = [50, 55];

// list_items.data(short_array);

// var right_array = arr;

// list_items.data(right_array);

var long_array = [50, 55, 52, 56, 68];

// list_items.data(long_array);

// list_items.data(arr).text(function(data) {
//   return data;
// });

// list_items
//   .data(long_array)
//   .append("li")
//   .text(function(data) {
//     console.log(data);
//   });

// list_items.data(long_array).text(function(data) {
//   return data;
// });

list_items
  .data(long_array)
  .enter()
  .append("li")
  .text(function(data) {
    return data;
  });

d3.select("ul")
  .selectAll("li")
  .data(short_array)
  .exit()
  .remove();
