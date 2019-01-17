/*Make a program that asks the favorite number of the user.
If that number is anything other than 42 display "Are you sure?" and ask again. (
This program should never end as long as the user didn't chose 42).*/
const readlineSync = require("readline-sync");
let numberChoosen;
function question (){
  numberChoosen = readlineSync.question("Choose a number: ");
}
question ();

while (numberChoosen!=42){
console.log("Are you sure?");
question ();
}
