/*Create a "Story Teller".
Ask questions to the user about different things. Store the results he gives to you.
Display them in a way that it creates a fun story!
Bonus: when you ask questions to the user he should be
able to see how many questions remain to be asked.*/
const readlineSync = require("readline-sync");
let total = 1;
let question1 = readlineSync.question(total + "/5: "+ "What is your favourite color?");
total += 1;
let question2 = readlineSync.question(total + "/5: "+ "What is your favourite meal?");
total += 1;
let question3 = readlineSync.question(total + "/5: "+ "What is your favourite pet?");
total += 1;
let question4 = readlineSync.question(total + "/5: "+ "What is your name?");
total += 1;
let question5 = readlineSync.question(total + "/5: "+ "What is your favourite sport?");
console.log (question4 + " likes " + question1 + " " + question3 + " and eating " + question2 + " when doing " + question5);
