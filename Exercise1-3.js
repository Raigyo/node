//Ask the user to enter its first name and display a message saying "Hello first name".
const readlineSync = require("readline-sync");
let firstName = readlineSync.question("What's your firstname?");
console.log ("Hello " + firstName +  ".");
