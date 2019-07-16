import getRandom from '../utils';
import startGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const generateGameData = () => {
  const question = getRandom(1, 100);
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';

  return [correctAnswer, question];
};

export default () => startGame(description, generateGameData);
