import getPlayGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGCD = (num1, num2) => {
  const divider = ((num1 > num2) ? num2 : num1);
  let result = 0;
  for (let i = 0; i <= divider; i += 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      result = i;
    }
  }
  return result;
};

const generateData = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const question = `${first} ${second}`;
  const correctAnswer = String(getGCD(first, second));
  return [question, correctAnswer];
};
const task = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  getPlayGame(generateData, task);
};

export default startGame;
