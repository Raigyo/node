/*Display all even numbers between 1 and 100.
Bonus: do two different versions.
The first one should use while and make a loop that will execute 100 times.
The second one should use for and make a loop that will execute 50 times.*/
//const readlineSync = require("readline-sync");
let i = 1;
while (i <= 100){
  console.log("while loop:" + i)
  i++;
}


for (let i = 1; i <= 50; i ++) {
  console.log("For loop:"+i);
}
