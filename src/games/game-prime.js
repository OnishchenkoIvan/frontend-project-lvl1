import readlineSync from 'readline-sync';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const condition = () => {
  const number = Math.round(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const result = () => {
    for (let i = 2; i < number; i += 1) {
      if (number <= 3) {
        return 'yes';
      } if (number % i === 0) {
        return 'no';
      }
    } return 'yes';
  };

  if (answer === result()) {
    return true;
  } return false;
};

export { rule, condition };
