/*
Create a function factorial(a) that returns the factorial of a number.
That function must be recursive.
In mathematics, the factorial of a positive integer n, denoted by n!,
is the product of all positive integers less than or equal to n. For example,
5! = 5*4*3*2*1 = 120
https://onechapteraday.fr/javascript-recursive-functions/
https://bytearcher.com/articles/equality-comparison-operator-javascript/
https://openclassrooms.com/fr/courses/438849-la-recursivite
*/
const readlineSync = require("readline-sync");
let n= readlineSync.question("Enter a number:");
// Ver1 : function
function fact1(n) {
  let result = 1;
  for (var i = 1; i <= n; i++)
    result = result * i;
    return result;
}
console.log("Factorial: "+fact1(n)); //ex 5 outputs 120
// Ver2: recursive function
function fact2(n) {
  if (n == 0) return 1;// This is the base case. // return 1 =  true
  else return n * fact2(n - 1);// This is the recursive one.
}
console.log("Factorial using recursive function: "+fact2(n)); //ex 5 outputs 120
