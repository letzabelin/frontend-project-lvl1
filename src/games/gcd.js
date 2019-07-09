import { getRandom, findGreatest } from '../extra';
import { startGame } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = () => {
  const firstNumber = getRandom(1, 50);
  const secondNumber = getRandom(1, 50);

  const question = `${firstNumber} ${secondNumber}`;
  const correct = `${findGreatest(firstNumber, secondNumber)}`;

  return [correct, question];
};

export default () => startGame(rules, getGcd);
