/*
Make a program that asks for a positive integer.
Then display all the divisors of that integer which are not 1 or itself.
Examples:
7 => nothing (it's a prime number)
10 => 2 5
9187 => nothing (it's a prime number too)
134234 => 2 41 82 1637 3274 67117
*/
const readlineSync = require("readline-sync");
//ask number
let number = readlineSync.question("Enter an integer number: ");
while (number % 1 !== 0) {
  number = readlineSync.question("Enter an integer number: ");
};
// calculate the modulo
for (let i = 0; i < number; i++) {
  let divisor = number % i;
  if (divisor == 0 && i!= number && i != 1){
    console.log(i);
  }
}
