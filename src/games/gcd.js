import { getRandom, findGreatest } from '../extra';
import { startGame } from '..';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = () => {
  const a = getRandom(1, 50);
  const b = getRandom(1, 50);

  const question = `${a} ${b}`;
  const correct = `${findGreatest(a, b)}`;

  return [correct, question];
};

export default () => startGame(rules, findGcd);
