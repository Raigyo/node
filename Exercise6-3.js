/*
Create a program that will re-use the Rectangle class you created previously.
It should generate 1000 random instances of Rectangle with random positions and sizes.
Then it will display all colliding rectangles amongst those that were generated that way.
*/
class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, lenght) {
  this.topLeftXPos = topLeftXPos;
  this.topLeftYPos = topLeftYPos;
  this.width = width;
  this.lenght = lenght;
  }//constructor
  /*get oneRectangle() {
  console.log(this.topLeftXPos);
}*/
  collides(otherRectangle) {
    if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
    this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
    this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.lenght &&
    this.lenght + this.topLeftYPos > otherRectangle.topLeftYPos) {
    //return true;
    console.log("true");
    }
    else {
    //return false;
      console.log("false");
    }
    /*console.log(this.topLeftXPos);
    console.log(otherRectangle.topLeftXPos);*/
  }//method
}//class

let rect1 = new Rectangle (0,50,75,75);
let rect2 = new Rectangle (0,20,80,85);
let rect3 = new Rectangle (500,400,5,3);
rect1.collides(rect2); // output true
rect2.collides(rect1); // output true
