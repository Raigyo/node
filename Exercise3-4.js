/*Write a program that will display the minimum and maximum elements of a given array.*/

//Use built-in functions Math.max & Math.min
let arr1 = [100, 12, 24, 369, 46, 50];
let valueMax = Math.max(arr1);
let valueMin = Math.min(arr1);

console.log("Max value of [100, 12, 24, 369, 46, 50]:" + Math.max(...arr1));
console.log("Min value of [100, 12, 24, 369, 46, 50]:" + Math.min(...arr1));
