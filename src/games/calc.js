import readlineSync from 'readline-sync';
import beginGame, { getRandomArbitrary, getRandomNumber } from '../index.js';

const getCalculate = (num1, num2, operation) => {
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

const gameCalculate = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomArbitrary(0, operators.length - 1)];
  const question = `${first} ${operator} ${second}`;
  const correctAnswer = getCalculate(first, second, operator).toString();
  return [question, correctAnswer];
};

const startGame = () => {
  const userName = beginGame();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameCalculate();
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
