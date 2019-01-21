/*Create a function named calcDistance which takes the coordinates
of two different points A and B in a 2D space.
That function must return the distance between those two points.
Create a program to use that function.
Note: You probably need to make some search on Google to learn the mathematical formula to do that.
You will also probably need to search for useful functions in JavaScript
to help you making complex mathematical formulas...
https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas/20916980
*/

const readlineSync = require("readline-sync");
let coordX1 = readlineSync.question("Coordonate X1:");
let coordY1 = readlineSync.question("Coordonate Y1:");
let coordX2 = readlineSync.question("Coordonate X2:");
let coordY2 = readlineSync.question("Coordonate Y2:");

//pythagoras theorem
function calcDistance (x1,y1,x2,y2){
    let a = x1 - x2;
    let b = y1 - y2;
    let c = Math.sqrt( a*a  + b*b );
    console.log("Distance between A & b: " +c);
}

calcDistance (coordX1,coordY1,coordX2,coordY2);
