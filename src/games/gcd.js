import readlineSync from 'readline-sync';
import beginGame from '../index.js';

const randomNumber = () => {
  const number = (Math.round(Math.random() * 100));
  return number;
};
const gcd = (num1, num2) => {
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

const playGCD = () => {
  const first = randomNumber();
  const second = randomNumber();
  const question = `${first} ${second}`;
  const correctAnswer = gcd(first, second);
  return [question, correctAnswer];
};

const game = () => {
  const userName = beginGame();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = playGCD();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};

export default game;
