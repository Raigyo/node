//Make this same thing as Exercise 2 but this time ask the user for the name,
//the first name and the city.
const readlineSync = require("readline-sync");
let name = readlineSync.question("What's your name?");
let firstName = readlineSync.question("What's your firstname?");
let city = readlineSync.question("In which city do you live?");
console.log ("Your name is " + firstName + " " + name + " and you live in " + city + ".");
