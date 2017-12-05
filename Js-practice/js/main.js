//Array that will contain all the items.
let items = [];

//Allows the user to add multiple items till they are done.
while (true) {
  let addItems = prompt('Type in the songs you wish to enter into your play list. Once your done type "quit" to exit.');
  if (addItems.toLowerCase() === 'quit') {
    break;
  } else {
    items.push(addItems);
  }
}

//Print out the items to the screen.
printList(items);
