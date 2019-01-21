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
//let arr1 = [23,54,3,150,12];
let total1 =0; // used in average()
let numChoosen = readlineSync.question("Choose a number");//used in count ()
let i = 1; //used in count ()
let arrNew = []; //used in count ()
//let rng=0; //used in randomNumber

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

//chose random number
/*function randomNumber () {
  let number = Math.random();
  rng = Math.floor(number*10) +1;
}*/
//create new array
function count(i) {
  if (i <= numChoosen) {
    randomNumber();
    arrNew.push(rng);
    count(i + 1);

  }
  console.log("Tableau avec " +numChoosen+ " nombres :" + arrNew)
}
count(i);

average(arr1)
minCalc(arr1);
maxCalc(arr1);
