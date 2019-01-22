/*
Create a function factorial(a) that returns the factorial of a number.
That function must be recursive.
In mathematics, the factorial of a positive integer n, denoted by n!,
is the product of all positive integers less than or equal to n. For example,
5! = 5*4*3*2*1 = 120
https://onechapteraday.fr/javascript-recursive-functions/
https://bytearcher.com/articles/equality-comparison-operator-javascript/
*/
const readlineSync = require("readline-sync");
let fact= readlineSync.question("Enter a number:");
// Ver1 : function
function factorial(x) {
  let result = 1;
  for (var i = 1; i <= x; i++)
    result = result * i;
    return result;
}
console.log("Factorial: "+factorial(fact)); //ex 5 outputs 120
// Ver2: recursive function
function factorial2(x) {
  // This is the base case.
  if (x === 0) return 1;
  // This is the recursive one.
  else return x * factorial2(x - 1);
    //console.log(x);
}
console.log("Factorial using recursive function: "+factorial2(fact)); //ex 5 outputs 120
