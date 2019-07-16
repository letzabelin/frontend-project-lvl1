import getRandom from '../utils';
import startGame from '..';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (length, start, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + (i * step));
  }

  return progression;
};

const generateGameData = () => {
  const progressionStart = getRandom(1, 100);
  const progressionStep = getRandom(1, 6);
  const hiddenElementPosition = getRandom(0, progressionLength);

  const progressionArray = getProgression(progressionLength, progressionStart, progressionStep);

  const correct = `${progressionArray.splice(hiddenElementPosition, 1, '..')}`;
  const question = progressionArray.join(' ');

  return [correct, question];
};

export default () => startGame(description, generateGameData);
