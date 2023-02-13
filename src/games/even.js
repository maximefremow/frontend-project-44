import playEngine from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const generatedData = () => {
  const num = getRandomNumber();
  const question = num;
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  playEngine(generatedData, task);
};
export default startGame;
