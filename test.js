//display data
console.log("Hello World!");
//import 'read-line' library
const readlineSync = require("readline-sync");
//The let keyword allows us to define a new variable
let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);
