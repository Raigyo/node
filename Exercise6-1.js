/*
Create a class named Circle with attributes xPos, yPos and radius.
Add a method named move(xOffset, yOffset) that will adjust the position of the circle.
Add a getter accessor named surface that will return the surface of the circle.
Test its method and accessors by modifying the values and checking if everything is consistent.
-----
Circle surface: π × R2.
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/PI
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/pow
*/
class Circle {
  constructor(xPos, yPos, radius) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.radius = radius;
  }//constructor
  get surface() {
  return Math.pow(this.radius, 2) * Math.PI;
  }//getter accessor
  move(xOffset, yOffset) {
  console.log("x: " + this.xPos + " move to " + xOffset); // output x: 10 move to 50
  console.log("y: " + this.yPos + " move to " + yOffset); // y: 12 move to 60
  }//method
}//class
let circle1 = new Circle (10,12,20);
console.log("Surface: " + circle1.surface); // output Surface: 1256.6370614359173
circle1.move(50,60);
