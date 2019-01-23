/*
1.Create a function named randomizeCast(tvSerie) that will take
as argument the data structure you defined in the previous exercise
and return a list of the same cast but in a random order.
2.Create a program that will use randomizeCast(tvSerie) and askTvSerie()
to ask the user about a TV serie then display a randomized
list of the previous cast that will form the new cast of your next serie.
------
Fisher–Yates shuffle
To shuffle an array a of n elements (indices 0..n-1):
for i from n−1 downto 1 do
     j ← random integer such that 0 ≤ j ≤ i
     exchange a[j] and a[i]
------
https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
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
  //console.log(myObject)
  console.log("Old object: " + JSON.stringify(myObject));
  randomizeCast(myObject);
}
askTvSerie();

function randomizeCast(dataSeries){
  let ctr = dataSeries.casting.length, temp, index;
  // While there are elements in the array
  while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = dataSeries.casting[ctr];
      dataSeries.casting[ctr] = dataSeries.casting[index];
      dataSeries.casting[index] = temp;
  }
  //return dataSeries.casting;
  console.log("Mixed object: " + JSON.stringify(dataSeries));
}
