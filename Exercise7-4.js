/*
Make an interactive program to manager your favorite pizza flavors.
When launched it must display a menu of this style:

Hello! Welcome to the Pizza Flavors Manager.

Please choose your actions:

1 - List all the pizza flavors
2 - Add a new pizza flavor
3 - Remove a pizza flavor
4 - Exit this program

Enter your action's number:
When the user enter the number of an action he will trigger the appropriate action:

List all the pizza flavors: Display the current list of pizza flavors.
(There should be none if we just launched the program.)
Add a new pizza flavor: Ask the user for a new pizza flavor to add to the list.
Remove a pizza flavor: Ask the user for the number of the pizza flavor
in the list he wants to remove.
Each time one of the action has been performed it should return to the menu.
(Except of course if we select to exit the program.)
Bonus: Save the list of pizza flavors on the file system
and reload it each time we launch the application.
*/
const readlineSync = require("readline-sync");
let choice;
let numPizza = 0;
let exit = false;
let myMenu = [];

//ask a choice in the menu
function progrMenu () {
  console.log("----------------");
  console.log("Hello! Welcome to the Pizza Flavors Manager. \n Please choose your actions: \n 1 - List all the pizza flavors \n 2 - Add a new pizza flavor \n 3 - Remove a pizza flavor \n 4 - Exit this program");
  choice = readlineSync.question("Enter your choice [1 - 4]: ");
  while (choice < 0 || choice > 4 || choice  % 1 !== 0) {
  choice = readlineSync.question("Enter your choice [1 - 4]: ");
  }
  switchCase (choice);
}
progrMenu();

//switchcase with operations 1 to 4
function switchCase (choice) {
  switch(parseInt(choice)) {
    case 1:
      console.log("---");
      console.log("List all the pizza flavors:");
      for (let i = 0; i < myMenu.length; i++) {
        console.log(i+1 + ":" + myMenu[i]);
      };
      choice = 0;
      progrMenu();
    case 2:
      console.log("---");
      newFlavor = readlineSync.question("Add a new pizza flavor: ");
      myMenu.push(newFlavor);
      choice = 0;
      progrMenu();
    case 3:
      for (let i = 0; i < myMenu.length; i++) {
        console.log(i+1 + ":" + myMenu[i]);
      };
      console.log("---");
      newFlavor = readlineSync.question("Delete a pizza flavor: ");
      console.log(newFlavor);
      if (newFlavor <= myMenu.length || newFlavor > 1 || newFlavor  % 1 !== 0){
        myMenu.splice(parseInt(newFlavor-1), 1);
      }
      else {
        console.log("Not a valid choice, back to menu")
      };
      choice = 0;
      progrMenu();
    case 4:
      console.log("Goodbye!");
      //localStorage["myMenu"] = JSON.stringify(myMenu);
  }
}
