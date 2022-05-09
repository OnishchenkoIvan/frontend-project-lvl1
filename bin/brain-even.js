#!/usr/bin/env node
import readlineSync from 'readline-sync';

import { userName, nameUser } from '../src/cli.js';

userName();

const gameEvenOdd = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && number % 2 === 0) {
      console.log('Correct!');
    } else if (answer === 'no' && number % 2 !== 0) {
      console.log('Correct!');
    } else {
      return console.log(`Let's try again, ${nameUser}!`);
    }
    if (i === 2) {
      return console.log(`Congratulations, ${nameUser}!`);
    }
  }
};

gameEvenOdd();
