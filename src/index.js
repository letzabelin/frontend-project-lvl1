import readlineSync from 'readline-sync';

const displayGreetings = () => console.log('Welcome to the Brain Games!');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  return userName;
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  return answer;
};

export default (desc, dataQuestions) => {
  displayGreetings();
  console.log(`${desc}\n`);
  const user = getUserName();

  const firstAttempt = 1;
  const totalAttempts = 3;

  const askQuestion = (attempt) => {
    if (attempt > totalAttempts) {
      return console.log(`Congratulations, ${user}!`);
    }

    const [correctAnswer, question] = dataQuestions();
    const userAnswer = getAnswer(question);

    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return console.log(`Let's try again, ${user}`);
    }

    console.log('Correct!');

    return askQuestion(attempt + 1);
  };

  askQuestion(firstAttempt);
};
