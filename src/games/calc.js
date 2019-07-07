import { getRandom } from '../extra';
import { startGame } from '..';

const rules = 'What is the result of the expression?';

const getCalc = () => {
  const a = getRandom(1, 10);
  const b = getRandom(1, 10);
  const operation = getRandom(1, 4);

  let correct;
  let question;

  switch (operation) {
    case 1:
      question = `${a} + ${b}`;
      correct = `${a + b}`;
      break;
    case 2:
      question = `${a} - ${b}`;
      correct = `${a - b}`;
      break;
    case 3:
      question = `${a} * ${b}`;
      correct = `${a * b}`;
      break;
    default:
      break;
  }

  return [correct, question];
};

export default () => startGame(rules, getCalc);
