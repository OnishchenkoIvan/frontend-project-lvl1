#!/usr/bin/env node
import readlineSync from "readline-sync";

import { userName, nameUser } from "../src/cli.js";

console.log("Welcome to the Brain Games!");

userName();

const gameEvenOdd = (youranswer) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 3;
  for (let i = 0; i < count; i++) {
    let number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    let answer = readlineSync.question("Your answer: ");
    if (answer === "yes" && number % 2 === 0) {
      console.log("Correct!");
    } else if (answer === "no" && number % 2 !== 0) {
      console.log("Correct!");
    } else {
      return console.log(`Let's try again, ${nameUser}!`);
    }
    if (i === 2) {
      return console.log(`Congratulations, ${nameUser}!`);
    }
  }
};

gameEvenOdd();
