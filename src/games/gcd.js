import getRandom from '../utils';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const findGreatest = (a, b) => ((b === 0) ? a : findGreatest(b, a % b));

const getGcd = () => {
  const firstNumber = getRandom(1, 50);
  const secondNumber = getRandom(1, 50);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${findGreatest(firstNumber, secondNumber)}`;

  return [correctAnswer, question];
};

export default () => startGame(description, getGcd);
