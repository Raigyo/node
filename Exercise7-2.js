/*
Make a program that asks for an integer n and generates
the n first Fibonacci numbers.
Yes, you'll have to search what the hell are Fibonacci numbers.
*/

const readlineSync = require("readline-sync");
//fct calculate fibonacci series
var fibonacci_series = function (n) {
  if (n===1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  };
};
//ask number
let number = readlineSync.question("Enter an integer number: ");
while (number % 1 !== 0) {
  number = readlineSync.question("Enter an integer number: ");
};
console.log(fibonacci_series(number-1));
