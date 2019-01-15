//display data
console.log("Hello World!");
//import 'read-line' library
const readlineSync = require("readline-sync");
//The let keyword allows us to define a new variable
/*
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);
*/
//we can assign what we want to it using the = operator.
/*
let age = 25; // I'm 25
age = 36; // I get older
age = 18; // Miraculously I'm getting younger
console.log("Age" + age);
*/
//var numbers/strings/booleans
//Numbers
let age = 23;
let sisterAge = age + 11;
age += 12; // age = age + 12;
console.log(age);
//Strings

let name = "Jean";
let nameSister = "Emma";
console.log("My name is " + name);
let userName = readlineSync.question("What's your name?");
console.log("He's called " + userName);

//parseInt() - parseInt() converts a string to a number.
/*
let htmlBadges = readlineSync.question('How many HTML badges do you have?');
let cssBadges = readlineSync.question('How many CSS badges do you have?');
let totalBadges = parseInt(htmlBadges) + parseInt(cssBadges);
console.log('Woaw, you have ' + totalBadges + "!");
*/
