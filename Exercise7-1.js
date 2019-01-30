/*
Make a program that generates an integer between 1 and 100
(don't display it to the user).
Then the program should display "Guess the number" and ask the user to guess.
If the user enters a number which is too low it should display "Too low"
and re-ask the question. If the user enters a number which is too high it
should display "Too high" and re-ask the question. If the user guess correctly
it should display "Well guessed!" and exit.
Math.floor(Math.random() * 1000) + 1; // returns a random integer from 1 to 1000
Math.floor(Math.random() * 1000);     // returns a random integer from 0 to 999
*/

const readlineSync = require("readline-sync");
let rng = Math.floor(Math.random() * 100) + 1;
let testPassed = false;
console.log(rng);
let question= readlineSync.question("Guess the number between 1 and 100: ");
while (testPassed != true) {
  if (question > rng) {
    console.log("Too high");
    question= readlineSync.question("Guess the number between 1 and 100: ");
  }
  else if (question < rng) {
    console.log("Too low");
    question= readlineSync.question("Guess the number between 1 and 100: ");
  }
  else if (question == rng) {
    console.log("Well guessed!");
    testPassed = true;
  };
};
