import getRandom from '../utils';
import startGame from '..';

const getProgression = (length, start, step) => {
  const progression = [];

  for (let i = start, j = 0; j < length; j += 1, i += step) {
    progression.push(i);
  }

  return progression;
};

const rules = 'What number is missing in the progression?';
const progressionLength = 10;

const getHiddenNumber = () => {
  const progressionStart = getRandom(1, 100);
  const progressionStep = getRandom(1, 6);
  const hiddenElementPosition = getRandom(0, progressionLength);

  const progressionArray = getProgression(progressionLength, progressionStart, progressionStep);

  const correct = `${progressionArray.splice(hiddenElementPosition, 1, '..')}`;
  const question = progressionArray.join(' ');

  return [correct, question];
};

export default () => startGame(rules, getHiddenNumber);
