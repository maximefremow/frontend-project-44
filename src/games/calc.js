import readlineSync from 'readline-sync';
import beginGame from '../index.js';

const randomNumber = () => {
  const number = (Math.round(Math.random() * 100));
  return number;
};
const getRandomArbitrary = (min, max) => {
  const numberArbitrary = Math.round(Math.random() * (max - min) + min);
  return numberArbitrary;
};

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return `Unknown ${operation}!`;
  }
};

const playCalc = () => {
  const first = randomNumber();
  const second = randomNumber();
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomArbitrary(0, operators.length - 1)];
  const question = `${first} ${operator} ${second}`;
  const correctAnswer = calculate(first, second, operator).toString();
  return [question, correctAnswer];
};

const game = () => {
  const userName = beginGame();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = playCalc();
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
