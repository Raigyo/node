//Like the previous exercice but this time divide them and display the rest of the integer division of the two numbers.
const readlineSync = require("readline-sync");
let numberOne = readlineSync.question("First number with decimal:");
let numberTwo = readlineSync.question("Second number with decimal:");


numberOne = parseInt(numberOne);
numberTwo = parseFloat(numberTwo);
let modulo = numberOne % numberTwo;
console.log (numberOne +" % "+ numberTwo +" = " + modulo);
