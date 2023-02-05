import playEngine, { getRandomNumber } from '../index.js';

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

const generatedData = () => {
  const num = getRandomNumber();
  const question = num;
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  playEngine(generatedData, task);
};

export default startGame;
