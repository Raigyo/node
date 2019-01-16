/*Ask the user to enter three numbers: min, max and current.
Display if current is between min and max.
Bonus: if min is greater than max, display an error message to explain
the user he's doesn't understand anything then exit the program.
(It must not ask any other question.)
Bonus 2: be polite in the error messages. (facultative)*/
const readlineSync = require("readline-sync");
let minNumber = readlineSync.question("Choose minimum number: ");
let maxNumber = readlineSync.question("Choose maximum number: ");
let currentNumber = readlineSync.question("Choose a main number: ");

if (minNumber > maxNumber){
  console.log("So for you, " + minNumber + " is greater than " + maxNumber + " and vice versa or what???");
}
else if (currentNumber > maxNumber || currentNumber < minNumber){
  console.log("The last number choosen," + currentNumber + " isn't between " + minNumber + " and " + maxNumber);
}
else {
  console.log(currentNumber + " is between " + minNumber + " and " + maxNumber);
}
