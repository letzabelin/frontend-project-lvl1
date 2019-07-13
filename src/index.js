import readlineSync from 'readline-sync';

const firstAttempt = 1;
const totalAttempts = 3;

const displayGreetings = () => console.log('Welcome to the Brain Games!');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');

  return userName;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

export default (desc, dataQuestions) => {
  displayGreetings();
  console.log(`${desc}\n`);

  const userName = getUserName();
  console.log(`Hello, ${userName}!\n`);

  const playRound = (attempt) => {
    if (attempt > totalAttempts) {
      console.log(`Congratulations, ${userName}!`);

      return;
    }

    const [correctAnswer, question] = dataQuestions();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();

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
