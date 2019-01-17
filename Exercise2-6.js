/*Make a program that ask the user to enter a number between 1 and 7.
Depending on the number, display the day of the week that correspond.
(1 => Monday, 2 => Tuesday, etc...).*/
const readlineSync = require("readline-sync");
let numberChoosen;
let day;
function question (){
  numberChoosen = readlineSync.question("Choose a number between 1 and 7: ");
  switch (parseInt(numberChoosen)) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
    default:
    question ();
    break;
  }
}
question ();


console.log("The day "+ numberChoosen + " in the week is " + day)
