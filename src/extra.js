// Even
export const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);
export const isEven = num => num % 2 === 0;

// Greatest common divisor
export const findGreatest = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGreatest(b, a % b);
};
