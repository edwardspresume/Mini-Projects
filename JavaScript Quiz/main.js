//Quiz questions and answers
let quizQA = [
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

//Prompt questions
let questions;

//Keep track of how many questions are answered correctly
let score = 0;

//Display which questions where answered correctly and which where not
let correctQuestions = "<h3> You got these questions correct: </h3> <ol>";
let incorrectQuestions = "<h3> You got these questions wrong: </h3> <ol>";

//Print the quiz result
function print(message) {
  document.write(message);
}

//Sort the questions in list format
function questionResults() {
  return "<li>" + quizQA[i][0] + "</li>";
}

//Loop through the quiz
for (var i = 0; i < quizQA.length; i++) {
  questions = parseInt(prompt(quizQA[i][0]));
  if (questions === quizQA[i][1]) {
    score++;
    correctQuestions += questionResults();
  } else {
    incorrectQuestions += questionResults();
  }
}

correctQuestions += "</ol>";
incorrectQuestions += "</ol>";

print("<p> You got " + score + " question(s) right </p>");
print(correctQuestions);
print(incorrectQuestions);
