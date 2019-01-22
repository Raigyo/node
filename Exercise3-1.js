/*Write a program that will add all the elements of an array.
Test it with the following arrays:
[1, 2, 3, 4, 5] => 15
[100, 101, 102] => 303
*/

//const readlineSync = require("readline-sync");

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
let total1 =0;
let total2 =0;

for (let elem of arr1) {
  //total1 = total1+elem;
  total1 += elem;
  //console.log(total1);
}

for (let elem of arr2) {
  total2 = total2+elem;
}

console.log("Total of the array [1, 2, 3, 4, 5] = " + total1);
console.log("Total of the array [100, 101, 102] = " + total2);
