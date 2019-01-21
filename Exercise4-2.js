/*
Create a function named rand10() that returns a random integer between 1 and 10.
Create a program that will display the result of that function each time it is run.
You will have to search on Google how to generate random numbers in JavaScript for this exercise.*/

//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
//Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre
//Math.floor(Math.random() * 10);  // returns a random integer from 0 to 9
//Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
/*
let number = Math.random();
console.log(number);
console.log(Math.floor(number));
console.log(Math.floor(number*10));
console.log(Math.floor(number*10) +1);
*/
function randomNumber () {
  let number = Math.random();
  let rng = Math.floor(number*10) +1;
  console.log(rng);
}
randomNumber ();
