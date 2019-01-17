/*Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number.
At the end display the sum of all the numbers collected this way.
Example: If the user enters 3 for n then 1, 2 and 3, the program should display 6.*/
const readlineSync = require("readline-sync");
let firstNumberChoosen = readlineSync.question("Choose a number 'n':");
let sumNumber=0;
let k;
for (i=1; i<=firstNumberChoosen; i++){
  k = readlineSync.question("Choose a number to add:");
  sumNumber = sumNumber + parseInt(k);
}
console.log("The sum of the "+ firstNumberChoosen + "n numbers is:" + sumNumber);
