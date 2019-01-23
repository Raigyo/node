/*

Create a function named randomizeCast(tvSerie) that will take
as argument the data structure you defined in the previous exercise
and return a list of the same cast but in a random order.
Create a program that will use randomizeCast(tvSerie) and askTvSerie()
to ask the user about a TV serie then display a randomized
list of the previous cast that will form the new cast of your next serie.
*/
const readlineSync = require("readline-sync");
function askTvSerie(){
  let dataActor=1;
  let i=0;
  let myObject = {
  series :"",
  production :"",
  casting :[]
  }
  myObject.series = readlineSync.question("What is your favourite series?");
  myObject.production = readlineSync.question("What is the year of production?");
  while(parseInt(dataActor) !==0) {
    dataActor=readlineSync.question("Which actor plays in the series? (0 = exit)");
    if (parseInt(dataActor) !==0){
      myObject.casting[i]=dataActor;
      i++;
    }
  }
  //console.log(myObject);
  randomizeCast(myObject);
}
askTvSerie();

randomizeCast() {
  console.log(myObject);
}
