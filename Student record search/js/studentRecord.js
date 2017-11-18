var student;
var search;
var message = '';

//Function to print the results 
var print = (msg) => {
    var output = document.querySelector("#output");
    output.innerHTML = msg;
}


//Format in which the data will be displayed
var studentInfo = student => {
    var report = `<h2> Student: ${student.Name} </h2>`;

    report += `<p> Interest: ${student.Interest} </p>`;

    report += `<p> Projects: ${student.projects} </p>`;

    report += `<p> Years of experience: ${student["Years of experience"]} </p>`;

    return report;
};


//Search for student in database
while (true) {
    search = prompt(
        "Search student records. Type a name[Edwards]. Once your done type 'quit' or press cancel to exit"
    );

    if (search === null || search.toLowerCase() === "quit") {
        break;
    }

    for (var i = 0; i < students.length; i++) {
        student = students[i];

        if (student.Name.toLowerCase() === search.toLowerCase()) {
            message += studentInfo(student);
            print(message);
        }
    }
}
