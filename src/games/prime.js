import { getRandom, isPrime } from '../extra';
import { startGame } from '..';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = () => {
  const question = getRandom(1, 100);
  const correct = (isPrime(question)) ? 'yes' : 'no';

  return [correct, question];
};

export default () => startGame(rules, getPrimeNumber);
