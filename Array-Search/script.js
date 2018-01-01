//An array of our store items
let storeItems = ['water', 'Blue Berries', 'Black berries', 'Celery', 'Spinach'];

//Print function
let print = msg => {
  let output = document.getElementById('output');
  output.innerHTML = `<h1> ${msg} </h1>`;
};

//Loops through our array and displays the requested information
while (true) {
  let search = prompt("Search up an item in our store. Type 'list' to display all of our current items. Type 'quit' to exit once your done.");
  search = search.toLowerCase();

  if (search === 'quit') {
    break;
  } else if (search === 'list') {
    print(storeItems.join(', '));
  } else {
    if (storeItems.indexOf(search) > -1) {
      print(`Yes we have ${search} in our store`);
    } else {
      print(`${search} is not in stock`);
    }
  }
}
