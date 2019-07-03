import readlineSync from 'readline-sync';

const me = 'be';

export const startWelcome = () => console.log('Welcome to the Brain Games!\n');

export const helloUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};
