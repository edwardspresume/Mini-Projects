//Function to print the results 
var print = (msg) => {
    var output = document.querySelector("#output");
    output.innerHTML = msg;
}

var msg = '';

//Loops through and list all the stundents and their credentials in our database
for (var i = 0; i < students.length; i++) {
    for (props in students[i]) {
        if (props === 'Name') {
            msg += '<h4>' + props + ': ' + students[i][props] + '</h4>';
        } else {
            msg += '<p>' + props + ': ' + students[i][props] + '</p>';
        }
    }
}

print(msg);
