/*
Write a program that will create a duplicate of a given array.
Bonus: make a first version that will only do it using push().
Make a second version that uses a single method call to perform the copy.
(You'll have to search on the MDN or Google for this one.)
*/
//const readlineSync = require("readline-sync");

//Method 1: push
let arr1 = ["Kylo Ren", "Lord Vader", "Lord Sidious"];
let arr2 = [];
for (let elem of arr1) {
  arr2.push(elem);
}
console.log("Method push: " + arr2);
//Method 2: slice
let arr3 = arr1.slice(0);
console.log("Method slice: " + arr3);
