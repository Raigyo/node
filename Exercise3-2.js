/*Write a program that will calculate the average value of a given array.
Test it with the following arrays:
[1, 2, 3, 4, 5] => 3
[100, 101, 102] => 101
Tip: average is just the sum of values divided by the number of values.
*/

//const readlineSync = require("readline-sync");

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
let total1 =0;
let total2 =0;

for (let elem of arr1) {
  total1 = total1+elem;
}

for (let elem of arr2) {
  total2 = total2+elem;
}

console.log("Average of the array [1, 2, 3, 4, 5] = " + total1/arr1.length);
console.log("Average of the array [100, 101, 102] = " + total2/arr2.length);
