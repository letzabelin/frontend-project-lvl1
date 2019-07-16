import getRandom from '../utils';
import startGame from '..';

const description = 'What is the result of the expression?';

const generateGameData = () => {
  const firstNumber = getRandom(1, 10);
  const secondNumber = getRandom(1, 10);
  const operation = getRandom(1, 4);

  let correctAnswer;
  let question;

  switch (operation) {
    case 1:
      question = `${firstNumber} + ${secondNumber}`;
      correctAnswer = `${firstNumber + secondNumber}`;
      break;
    case 2:
      question = `${firstNumber} - ${secondNumber}`;
      correctAnswer = `${firstNumber - secondNumber}`;
      break;
    case 3:
      question = `${firstNumber} * ${secondNumber}`;
      correctAnswer = `${firstNumber * secondNumber}`;
      break;
    default:
      break;
  }

  return [correctAnswer, question];
};

export default () => startGame(description, generateGameData);
