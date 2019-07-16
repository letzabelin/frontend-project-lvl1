import readlineSync from 'readline-sync';

const firstAttempt = 1;
const totalAttempts = 3;

export default (desc, gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desc}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const playRound = (attempt) => {
    if (attempt > totalAttempts) {
      console.log(`Congratulations, ${userName}!`);

      return;
    }

    const [correctAnswer, question] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}`);

      return;
    }

    console.log('Correct!');

    playRound(attempt + 1);
  };

  playRound(firstAttempt);
};
