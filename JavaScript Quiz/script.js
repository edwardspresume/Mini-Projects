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
let print = msg => {
  let output = document.getElementById('output');
  output.innerHTML = msg;
};

print('asd')
