import { getRandom, isEven } from '../extra';
import { startGame } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

export const getEvenNumber = () => {
  const question = getRandom(1, 100);
  const correct = (isEven(question)) ? 'yes' : 'no';

  return [correct, question];
};

export default () => startGame(rules, getEvenNumber);
