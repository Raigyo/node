/*
By reusing the function rand10() created in Exercise 2,
write a function named multiRand(n) that returns an array of n numbers between 1 and 10.
You should not modify anything in rand10() to achieve this.
Use that function to create a program that will ask the number of random numbers
to generate then display that same number of random numbers.
*/
const readlineSync = require("readline-sync");
//variables
let numChoosen = readlineSync.question("Choose a number");
let i = 1;
let rng=0;
let arrNew = [];
//function random number
function randomNumber () {
  let number = Math.random();
  rng = Math.floor(number*10) +1;
}
function count(i) {
  if (i <= numChoosen) {
    randomNumber();
    arrNew.push(rng);
    count(i + 1);

  }
}
count(i);
console.log("Tableau avec " +numChoosen+ " nombres de 1 à 10 :" + arrNew)
