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
let temp ="";
let firsTime = true;
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
//add datas
function askTvSerie(){
  serieAdd();
  yearAdd();
  castAdd();
  console.log(myObject);
}
askTvSerie();
//check empty fields
function checkEmptyField(){
  if (temp==""){
    emptyField=true;
  }
  else{
    emptyField=false;
  }
}
//add series
function serieAdd(){
  while (emptyField==true){
  temp = readlineSync.question("What is your favourite series?");
  checkEmptyField();
  }
  myObject.keySeries = temp;
  emptyField=true;
  temp="";
}
//add production year
function yearAdd(){
  while (emptyField==true){
  temp= readlineSync.question("What is the year of production?");
  checkEmptyField();
  }
  myObject.keyProd = temp;
  emptyField=true;
  temp="";
}
//add casting
//several actors can be added+at least one is mandatori
//+empty field means exit if there is at least a data
function castAdd() {
  let i=0;
  while (temp!="" || firsTime==true){
    temp= readlineSync.question("Which actors play in the series? ");
    if (temp!=""){
      myObject.keyCast[i] = "{ actor: '"+temp+"' }";
      i++;
      firsTime=false;
    }
  }
}
