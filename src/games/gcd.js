import readlineSync from 'readline-sync';
import beginGame, { getRandomNumber } from '../index.js';

const getGCD = (num1, num2) => {
  let divider;
  if (num1 > num2) {
    divider = num2;
  } else {
    divider = num1;
  }
  let result = 0;
  for (let i = 0; i <= divider; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      result = String(i);
    }
  } return result;
};

const gameGCD = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const question = `${first} ${second}`;
  const correctAnswer = getGCD(first, second);
  return [question, correctAnswer];
};

const startGame = () => {
  const userName = beginGame();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameGCD();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};

export default startGame;
