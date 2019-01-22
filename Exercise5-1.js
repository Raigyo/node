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
//var & arrays
let temp;
let actorName;
let emptyField=true;
let myObject = {
  keySeries: "empty",
  keyProd: "empty",
  keyCast: [
    {
      actor: "empty"
    },
  ]
}
//console.log(myObject.keyCast[0]);
function askTvSerie(){
  serieAdd();
  yearAdd();
  castAdd();
  console.log(myObject);
}
askTvSerie();

function checkEmptyField(){
  if (temp==""){
    emptyField=true;
  }
  else{
    emptyField=false;
  }
}

function serieAdd(){
  while (emptyField==true){
  temp = readlineSync.question("What is your favourite series?");
  checkEmptyField();
  }
  myObject.keySeries = temp;
  emptyField=true;
  temp="";
}

function yearAdd(){
//  console.log(emptyField);
  while (emptyField==true){
  temp= readlineSync.question("What is the year of production?");
  checkEmptyField();
  }
  myObject.keyProd = temp;
  emptyField=true;
  temp="";
}

function castAdd() {
  let i=0;
  while (actorName!=""){
    actorName = readlineSync.question("Which actors play in the series? ");
    if (actorName!=""){
      myObject.keyCast[i] = "{ actor: '"+actorName+"' }";
      i++;
    }
  }
}
