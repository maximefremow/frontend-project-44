import playEngine, { getRandomNumber } from '../index.js';

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

const generatedData = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const question = `${first} ${second}`;
  const correctAnswer = getGCD(first, second);
  return [question, correctAnswer];
};
const task = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  playEngine(generatedData, task);
};

export default startGame;
