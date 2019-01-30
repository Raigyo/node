/*
Exercise 7.5 - Array Sort
Create a program that can sort an array without
using Array.sort() or a similar method.
Test it with multiple arrays of numbers.*/

//create 2 arrays
var arrayNumbers = [];
var fruitsList = ["Banana", "Tomato,", "Orange", "Apple", "Mango", "Lemon", "Peach"];
for (var i = 0; i < 10 ; i++) {
  var newNumber = Math.floor(Math.random() * 1000) + 1;
  arrayNumbers.push(newNumber);

}

//don't use sort
/*
fruitsList.sort();
console.log(fruitsList);
arrayNumbers.sort();
console.log(arrayNumbers);
*/

//BUBBLE sort: https://initjs.org/bubble-sort-in-javascript-19fa6fdfbb46
function sort(values) {
  var origValues = values.slice();
  var length = origValues.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if (origValues[i] > origValues[i+1]) {
        var temp = origValues[i];
        origValues[i] = origValues[i+1];
        origValues[i+1] = temp;
        swapped = true;
      };
    };
  }
  while(swapped === true);
  console.log(origValues);
}

//results
console.log("Original:");
console.log(fruitsList);
console.log("Sorted:");
sort(fruitsList);
console.log("Original:");
console.log(arrayNumbers);
console.log("Sorted:");
sort(arrayNumbers);
