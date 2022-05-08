import readlineSync from 'readline-sync';

export let nameUser;

export const userName = () => {
  const yourName = readlineSync.question('May I have your name? ');
  nameUser = yourName;
  return console.log(`Hello, ${yourName}!`);
};
