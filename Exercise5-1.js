/*
Create a function named askTvSerie() that will ask the user for the following data about
its favorite TV serie:
Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it.
The data structure must be elegant.
Create a program that use that function to generate a TV serie object
and display it to the user in JSON format.
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
  console.log(myObject)
}
askTvSerie();
