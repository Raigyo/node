//Ask two numbers with decimal part to the user.
//For the first one only keep the integer part. Then multiply them and display the result.
const readlineSync = require("readline-sync");
let numberOne = readlineSync.question("First number with decimal:");
let numberTwo = readlineSync.question("Second number with decimal:");
//let numberTwo = readlineSync.question("Second number with decimal:");

numberOne = parseInt(numberOne);
numberTwo = parseFloat(numberTwo);
console.log (numberOne +" * "+ numberTwo +" = " +numberOne*numberTwo);
