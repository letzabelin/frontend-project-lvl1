// Even
export const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);
export const isEven = num => num % 2 === 0;

// Greatest common divisor
export const findGreatest = (a, b) => ((b === 0) ? a : findGreatest(b, a % b));
