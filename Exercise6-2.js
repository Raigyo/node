/*
Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and lenght.
Add a method named collides(otherRectangle) that returns true only if the current
rectangle collides with otherRectangle.
Test the collides(otherRectangle) method by using multiple test cases.
*/
class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, lenght) {
  this.topLeftXPos = topLeftXPos;
  this.topLeftYPos = topLeftYPos;
  this.width = width;
  this.lenght = lenght;
  }//constructor
  collides(otherRectangle) {

  }//method
}//class

let rect1 = new Rectangle (0,50,75,75);
let rect2 = new Rectangle (0,20,80,85);
let rect3 = new Rectangle (300,300,10,12);
