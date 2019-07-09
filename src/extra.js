// Random
export const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);

// Even
export const isEven = num => num % 2 === 0;

// Greatest common divisor
export const findGreatest = (a, b) => ((b === 0) ? a : findGreatest(b, a % b));

// Progression
export const getProgression = (length, start, step) => {
  let progression = '';

  for (let i = start, j = 0; j < length; j += 1, i += step) {
    if (j === length - 1) {
      progression += `${i}`;
    } else {
      progression += `${i} `;
    }
  }

  return progression.split(' ');
};

// isPrime
export const isPrime = (n) => {
  if (n <= 1) {
    return n;
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
