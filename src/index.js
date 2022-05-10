import readlineSync from 'readline-sync';

const gamesLogic = (rule, condition) => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  const count = 3;
  console.log(rule);
  for (let i = 0; i < count; i += 1) {
    if (condition()) {
      console.log('Correct!');
    } else {
      return console.log(`Let's try again, ${yourName}!`);
    }
    if (i === 2) {
      return console.log(`Congratulations, ${yourName}!`);
    }
  } return gamesLogic;
};

export default gamesLogic;
