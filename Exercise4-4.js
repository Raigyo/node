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
const readlineSync = require("readline-sync");

//variables
let numChoosen = readlineSync.question("Choose a number");
let rng=0;// randomNumber
let i = 1; //used in random  ()
let arrNew = [];//used in random  ()
let total1 =0; // used in average()
//function random number
function random (i) {
  if (i <= numChoosen) {
    arrNew.push(Math.floor(Math.random()*1000) +1);
    random (i + 1);

  }
}
//calulate average of an array
function average(argAv){
  for (let elem of argAv) {
    total1 = total1+elem;

  }
  console.log("Average: " + total1/argAv.length)
}
//calculate the min of an array
function minCalc(argMin){
  let valueMin = Math.min(...argMin);
  console.log("Min value: " +valueMin);
}
//calculate the max of an array
function maxCalc(argMax){
  let valueMax = Math.max(...argMax);
  console.log("Max value: " +valueMax);
}
random (i);
console.log("Tableau avec " +numChoosen+ " nombres:" + arrNew)

average(arrNew)
minCalc(arrNew);
maxCalc(arrNew);
