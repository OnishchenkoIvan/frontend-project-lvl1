import readlineSync from 'readline-sync';

const rule = 'Find the greatest common divisor of given numbers.';

const condition = () => {
  const number = Math.round(Math.random() * 100);
  const numberTwo = Math.round(Math.random() * 100);
  console.log(`Question: ${number} ${numberTwo}`);
  let answer = readlineSync.question('Your answer: ');
  const result = () => {
    for (let i = 49; i > 1; i -= 1) {
      if (number % numberTwo === 0) {
        return numberTwo;
      } if (numberTwo % number === 0) {
        return number;
      } if (number % i === 0 && numberTwo % i === 0) {
        return i;
      }
    } return 1;
  };
  answer = +answer;
  if (answer === result(number, numberTwo)) {
    return true;
  }
  return console.log(`'${answer}' is whrong answer ;(. Correct answer was '${result()}'.`);
};

export { rule, condition };
