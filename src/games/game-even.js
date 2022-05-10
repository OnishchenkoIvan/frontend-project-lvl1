import readlineSync from 'readline-sync';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const condition = () => {
  const number = Math.round(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === 'yes' && number % 2 === 0) {
    return true;
  } if (answer === 'no' && number % 2 !== 0) {
    return true;
  } return false;
};

export { rule, condition };
