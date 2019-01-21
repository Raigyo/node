/*Create a function named calcSurface that takes the length and width of a rectangle
and returns its surface.
Then create a program that asks the length and with of a rectangle to the user
then displays the surface of that rectangle. That program must use the function you created.*/

function calcSurface (a,b) {
  return a * b;
}
const readlineSync = require("readline-sync");
let rectLe = readlineSync.question("Rectangle length:");
let rectWi = readlineSync.question("Rectangle width:");
console.log(calcSurface(rectLe,rectWi));
