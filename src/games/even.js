import getPlayGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

const generatedData = () => {
  const question = getRandomNumber();
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  getPlayGame(generatedData, task);
};
export default startGame;
