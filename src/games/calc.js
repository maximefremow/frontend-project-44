import getPlayGame from '../index.js';
import getRandomNumber from '../utils.js';

const getCalculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown ${operation}!`);
  }
};
const operators = ['+', '-', '*'];
const generateData = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${first} ${operator} ${second}`;
  const correctAnswer = getCalculate(first, second, operator).toString();
  return [question, correctAnswer];
};

const task = 'What is the result of the expression?';

const startGame = () => {
  getPlayGame(generateData, task);
};

export default startGame;
