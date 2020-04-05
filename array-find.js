var array1 = [5,12,8,120,44];

// var found = array1.find(function(element) {
//   return element > 100;
// })
//
// console.log(found);

// function isLargeNumber(element) {
//   return element > 13;
// }
console.log(array1.findIndex(function(element) {
  return element > 12;
}));
