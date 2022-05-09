#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { userName, nameUser } from './cli.js';

userName();

const gameCalc = () => {
  console.log('What is the result of the expression?');
  const count = 3;
  for (let i = 0; i < count; i += 1) {
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
      console.log('Correct!');
    } else {
      return console.log(
        `'${answer}' is whrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${nameUser}!`,
      );
    }
    if (i === 2) {
      return console.log(`Congratulations, ${nameUser}!`);
    }
  }
};

gameCalc();
