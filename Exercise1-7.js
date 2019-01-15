/*Ask to the user its shoe size and its birth year. Then make the following calculation:
Multiply the shoe size by 2
Add 5 to the result
Multiply that by 50
Subtract the birth year
Add 1766
Test with your own birth year and your shoe size.
*/
const readlineSync = require("readline-sync");
let numberShoes = readlineSync.question("What is your shoe size?");
let numberBirth = readlineSync.question("What is your birth year?");
numberShoes = parseInt(numberShoes);
numberBirth = parseFloat(numberBirth);
let total =  [(numberShoes*2)+5] *50 - numberBirth +1766;
console.log (total);
