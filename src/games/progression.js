import { getRandom } from '../extra';
import { startGame } from '..';

const rules = 'What number is missing in the progression?';

const findNumber = () => {
  let progression = '';
  const progressionLength = 10;
  const progressionStart = getRandom(1, 100);
  const progressionStep = getRandom(1, 6);
  const hiddenElement = getRandom(1, progressionLength);

  for (let i = progressionStart, j = 0; j < progressionLength; j += 1, i += progressionStep) {
    if (j === hiddenElement) {
      progression += '.. ';
    } else if (j === progressionLength - 1) {
      progression += `${i}`;
    } else {
      progression += `${i} `;
    }
  }

  return progression;
};

export default () => startGame(rules, findNumber);
