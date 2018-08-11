const storeItems = ["item1", "item2", "item3", "item4"];

const print = msg => {
  const output = document.getElementById("output");
  output.innerHTML = `<h1> ${msg} </h1>`;
};

while (true) {
  let search = prompt("Enter an item to search");
  search = search.toLowerCase();

  if (search === "quit") {
    break;
  } else if (search === "list") {
    print(storeItems.join(", "));
  } else {
    if (storeItems.indexOf(search) > -1) {
      print(`${search} is in stock`);
    } else {
      print(`${search} is not in stock`);
    }
  }
}
