import getPlayGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateData = () => {
  const question = getRandomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  getPlayGame(generateData, task);
};

export default startGame;
