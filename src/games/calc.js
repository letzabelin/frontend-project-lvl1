import { getRandom } from '../extra';
import { startGame } from '..';

const rules = 'What is the result of the expression?';

const getCalc = () => {
  const firstNumber = getRandom(1, 10);
  const secondNumber = getRandom(1, 10);
  const operation = getRandom(1, 4);

  let correct;
  let question;

  switch (operation) {
    case 1:
      question = `${firstNumber} + ${secondNumber}`;
      correct = `${firstNumber + secondNumber}`;
      break;
    case 2:
      question = `${firstNumber} - ${secondNumber}`;
      correct = `${firstNumber - secondNumber}`;
      break;
    case 3:
      question = `${firstNumber} * ${secondNumber}`;
      correct = `${firstNumber * secondNumber}`;
      break;
    default:
      break;
  }

  return [correct, question];
};

export default () => startGame(rules, getCalc);
