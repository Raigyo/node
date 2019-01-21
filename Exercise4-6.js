/*
Create a function factorial(a) that returns the factorial of a number.
That function must be recursive.

En mathématiques, la factorielle d'un entier naturel n est le produit des nombres entiers
strictement positifs inférieurs ou égaux à n: n!
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
