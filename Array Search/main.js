//Store items
let items = ['apple', 'cake', 'water', 'bat', 'ice'];
let search;

//Print function
let print = msg => {
  let output = document.getElementById('output');
  output.innerHTML = `<h1> ${msg} </h1>`;
};

while (true) {
  search = prompt("Seach up an item in our store or type 'list' to show all our items. When you are done type 'quit' to exit ");
  search = search.toLowerCase();
  if (search === 'quit') {
    break;
  } else if (search === 'list') {
    print(items.join(', '));
  } else {
    if (items.indexOf(search) > -1) {
      print('yes we have ' + search + ' in the store');
    } else {
      print(search + ' is not in stock');
    }
  }
}
