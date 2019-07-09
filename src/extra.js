// Even
export const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);
export const isEven = num => num % 2 === 0;

// Greatest common divisor
export const findGreatest = (a, b) => ((b === 0) ? a : findGreatest(b, a % b));

// Progression
export const getProgression = (lenght, start, step) => {
  let progression = '';

  for (let i = start, j = 0; j < lenght; j += 1, i += step) {
    if (j === lenght - 1) {
      progression += `${i}`;
    } else {
      progression += `${i} `;
    }
  }

  return progression.split(' ');
};
