import readlineSync from 'readline-sync';

const rule = 'What is the result of the expression?';

const condition = () => {
  const number = Math.round(Math.random() * 100);
  const numberTwo = Math.round(Math.random() * 10);
  const signs = ['+', '-', '*'];
  const choiceSign = signs[Math.floor(Math.random() * signs.length)];
  console.log(`Question: ${number} ${choiceSign} ${numberTwo}`);
  const answer = readlineSync.question('Your answer: ');
  let result;
  if (choiceSign === '+') {
    result = number + numberTwo;
  } else if (choiceSign === '-') {
    result = number - numberTwo;
  } else if (choiceSign === '*') {
    result = number * numberTwo;
  }
  if (+answer === result) {
    return true;
  }
  return console.log(`'${answer}' is whrong answer ;(. Correct answer was '${result}'.`);
};
export { rule, condition };
