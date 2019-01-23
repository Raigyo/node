/*
Create a program that will re-use the Rectangle class you created previously.
It should generate 1000 random instances of Rectangle with random positions and sizes.
Then it will display all colliding rectangles amongst those that were generated that way.
Math.floor(Math.random() * 1000) + 1; // returns a random integer from 1 to 1000
Math.floor(Math.random() * 1000);     // returns a random integer from 0 to 999
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
  }//method
}//class

//Create 1000 rectangles with random x, y, xPos, yPos
//the test if they collapse
function thousandRect()  {
  let myObject ={
    rect :[]
  }
  for (i=0; i<=999; i++){
    myObject.rect[i] = new Rectangle (Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000),Math.floor(Math.random() * 1000));
  }
  //collapse test
  for (i=0; i<=999; i++){
    for (j=0; j<=999; j++){
      if(i != j){
        console.log("rect: " + i + " vs: " + j);
        myObject.rect[i].collides(myObject.rect[j]);
      }
    }
  }
}
thousandRect();
