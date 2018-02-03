/* ==========================================================================
                                 Quiz data
   ========================================================================== */

const quiz = [
  ["How many days are in the week?", 7],
  ["What day is my birthday", 25],
  ["How many hours in a day", 24]
];

/* ==========================================================================
                          Prints our content to the screen
   ========================================================================== */

const print = msg => document.write(msg);

/* ==========================================================================
                      Processes user input then render result
   ========================================================================== */

const quizGenerator = () => {
  //Keep track of how many questions are answered correctly
  let score = 0;

  //Display which questions where answered correctly and which where not
  let correctQuestions = `<h3> You got these questions correct: </h3> <ol>`;
  let incorrectQuestions = `<h3> You got these questions wrong: </h3> <ol>`;

  //Loop through the quiz
  for (var i = 0; i < quiz.length; i++) {
    //Prompt questions
    const question = parseInt(prompt(quiz[i][0]));

    //Sort the questions in list format
    const questionResults = () => `<li> ${quiz[i][0]} </li>`;

    if (question === quiz[i][1]) {
      score++;
      correctQuestions += questionResults();
    } else {
      incorrectQuestions += questionResults();
    }
  }

  correctQuestions += `</ol>`;
  incorrectQuestions += `</ol>`;

  print(`<p> You got ${score} question(s) right </p>`);
  print(correctQuestions);
  print(incorrectQuestions);
};

quizGenerator();
