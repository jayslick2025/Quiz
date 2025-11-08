const readline = require('readline');

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is the capital of Nigeria?",
    choices: ["Lagos", "Abuja", "Kano", "Ibadan"],
    answer: "Abuja"
  },
  {
    question: "What is the capital of Germany?",
    choices: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    answer: "Berlin"
  }
];

let score = 0;
let i = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(questions[i].question);
for (let j = 0; j < questions[i].choices.length; j++) {
  console.log(`${j + 1}. ${questions[i].choices[j]}`);
}

rl.question('Enter your answer (1-4): ', answer => {
  let userAnswer = questions[i].choices[parseInt(answer) - 1];
  if (userAnswer === questions[i].answer) {
    console.log("Correct!");
    score++;
  } else {
    console.log(`Incorrect. The correct answer is ${questions[i].answer}`);
  }

  i++;
  console.log(questions[i].question);
  for (let j = 0; j < questions[i].choices.length; j++) {
    console.log(`${j + 1}. ${questions[i].choices[j]}`);
  }

  rl.question('Enter your answer (1-4): ', answer => {
    let userAnswer = questions[i].choices[parseInt(answer) - 1];
    if (userAnswer === questions[i].answer) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Incorrect. The correct answer is ${questions[i].answer}`);
    }

    i++;
    console.log(questions[i].question);
    for (let j = 0; j < questions[i].choices.length; j++) {
      console.log(`${j + 1}. ${questions[i].choices[j]}`);
    }

    rl.question('Enter your answer (1-4): ', answer => {
      let userAnswer = questions[i].choices[parseInt(answer) - 1];
      if (userAnswer === questions[i].answer) {
        console.log("Correct!");
        score++;
      } else {
        console.log(`Incorrect. The correct answer is ${questions[i].answer}`);
      }

      console.log(`You scored ${score} out of ${questions.length}!`);
      rl.close();
    });
  });
});
