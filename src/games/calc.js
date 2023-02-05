import playEngine, { getRandomArbitrary, getRandomNumber } from '../index.js';

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

const generatedData = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomArbitrary(0, operators.length - 1)];
  const question = `${first} ${operator} ${second}`;
  const correctAnswer = getCalculate(first, second, operator).toString();
  return [question, correctAnswer];
};

const task = 'What is the result of the expression?';

const startGame = () => {
  playEngine(generatedData, task);
};

export default startGame;
