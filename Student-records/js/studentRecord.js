//Function to print the results
let print = (msg) => {
  let output = document.querySelector("#output");
  output.innerHTML = msg;
}

let msg = '';

//Loops through and list all the stundents and their credentials in our database
for (let i = 0; i < students.length; i++) {
  for (props in students[i]) {
    if (props === 'Name') {
      msg += `<h4> ${props}: ${students[i][props]} </h4>`;
    } else {
      msg += `<p> ${props}: ${students[i][props]} </p>`;
    }
  }
}

print(msg);
