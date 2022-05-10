import readlineSync from 'readline-sync';

const rule = 'What number is missing in the progression?';

const condition = () => {
  const number = Math.round((Math.random() * 19) + 1);
  const numberTwo = Math.round((Math.random() * 9) + 1);
  const arrayNums = [];
  for (let i = number; i < ((numberTwo * 10) + number); i += numberTwo) {
    arrayNums.push(i);
  }
  const num = Math.round((Math.random() * 9));
  const hideNum = arrayNums[num];
  arrayNums[num] = '..';
  console.log(`Question: ${arrayNums.join(' ')}`);
  let answer = readlineSync.question('Your answer: ');
  answer = +answer;
  if (answer === hideNum) {
    return true;
  }
  return console.log(`'${answer}' is whrong answer ;(. Correct answer was '${hideNum}'.`);
};

export { rule, condition };
