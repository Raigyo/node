/*
Create a function named average(arr) that takes an array of numbers as argument
and returns the average.

Create a function named min(arr) that takes an array of numbers as argument
and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument
and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers
but also displays their average, min and max.
To do so, use the three functions you just created as well as the multiRand(n) function created
in Exercise 3.
*/
//let valueMin= 0;
//let valueMax= 0;
let arr1 = [23,54,3,150,12];
let total1 =0;

function average(argAv){
  for (let elem of argAv) {
    total1 = total1+elem;

  }
  console.log("Average: " + total1/argAv.length)
}
average(arr1)

function minCalc(argMin){
  let valueMin = Math.min(...argMin);
  console.log("Min value: " +valueMin);
}
minCalc(arr1);
function maxCalc(argMax){
  let valueMax = Math.max(...argMax);
  console.log("Max value: " +valueMax);
}
maxCalc(arr1);
