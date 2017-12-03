//Quiz questions and answers
var quizQA = [
  [
    "How many days are in the week?", 7
  ],
  [
    "What day is my birthday", 25
  ],
  [
    "How many hours in a day", 24
  ]
];

//Display which questions where answered correctly and which where not
var correctQuestions = `<h3> You got these questions correct: </h3> <ol>`;
var incorrectQuestions = `<h3> You got these questions wrong: </h3> <ol>`;

//Print the quiz result
var print = msg => {
  let output = document.getElementById('output');
  output.innerHTML = msg;
};

//Sort the questions in list format
var questionResults = () => `<li> ${quizQA[i][0]} </li>`;

//Loop through the quiz
for (var i = 0; i < quizQA.length; i++) {
  //Keep track of how many questions are answered correctly
  var score = 0;

  //Prompt questions
  var question = parseInt(prompt(quizQA[i][0]));
  if (question === quizQA[i][1]) {
    score++;
    correctQuestions += questionResults();
  } else {
    incorrectQuestions += questionResults();
  }
}

correctQuestions += `</ol>`;
incorrectQuestions += `</ol>`;

print("<p> You got " + score + " question(s) right </p>");
print(correctQuestions);
print(incorrectQuestions);
