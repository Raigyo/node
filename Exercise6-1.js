/*
Create a class named Circle with attributes xPos, yPos and radius.
Add a method named move(xOffset, yOffset) that will adjust the position of the circle.
Add a getter accessor named surface that will return the surface of the circle.
Test its method and accessors by modifying the values and checking if everything is consistent.
-----
Circle surface: π × R2.
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/PI
*/
class Circle {
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    }//constructor
    move(xOffset, yOffset) {
    console.log(this.xPos + " move to " + xOffset);
    console.log(this.yPos + " move to " + yOffset);
    }//method
  }//class
new Circle(10,12,20).move(50,60);
