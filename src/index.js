import readlineSync from 'readline-sync';

export const displayGreetings = () => console.log('Welcome to the Brain Games!');

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  return userName;
};

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

export const startGame = (rules, dataQuestions) => {
  // first greetings
  displayGreetings();
  console.log(`${rules}\n`);
  const user = getUserName();

  // start game
  const askQuestion = (attempt = 1) => {
    // good end
    if (attempt > 3) {
      console.log(`Congratulations, ${user}!`);
      return null;
    }

    const q = dataQuestions();
    const correctAnswer = q[0];
    const question = q[1];
    const userAnswer = getAnswer(question);

    // bad end
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${user}`);

      return null;
    }

    // continuation of the game
    console.log('Correct!');

    return askQuestion(attempt + 1);
  };

  askQuestion();
};
