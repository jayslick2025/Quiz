class QuizGames {
  questions = [
    "What is the official language of Nigeria?",
    "Which of these is a Nigerian dish?",
    "Which country colonized Nigeria?"
  ];

  choices = [
    ["Yoruba", "Hausa", "English", "Igbo"],
    ["Pizza", "Sushi", "Jollof Rice", "Tacos"],
    ["Great Britain", "France", "Spain", "Portugal"]
  ];

  answers = ["English", "Jollof Rice", "Great Britain"];

  startGame() {
    let score = 0;
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const askQuestion = (i) => {
      if (i >= this.questions.length) {
        console.log(`\nGame Over! Your final score is ${score} out of ${this.questions.length}`);
        readline.close();
        return;
      }

      console.log(`\n${this.questions[i]}`);
      this.choices[i].forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
      });

      readline.question('Enter your answer (1-4): ', answer => {
        const userAnswer = this.choices[i][parseInt(answer) - 1];
        if (userAnswer === this.answers[i]) {
          console.log("Correct!");
          score++;
        } else {
          console.log(`Incorrect. The correct answer is ${this.answers[i]}`);
        }
        askQuestion(i + 1);
      });
    };

    askQuestion(0);
  }
}

const game = new QuizGames();
game.startGame();


   

    