import readlineSync from 'readline-sync';
import beginGame from '../index.js';

const getRandomArbitrary = (min, max) => {
  const numberArbitrary = Math.round(Math.random() * (max - min) + min);
  return numberArbitrary;
};

const getProgression = (start, additionOperations, delta) => {
  const members = [];
  for (let i = 0; i <= additionOperations; i += 1) {
    members.push(start + delta * i);
  }
  return members;
};

const game = () => {
  const userName = beginGame();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const start = getRandomArbitrary(0, 10);
    const delta = getRandomArbitrary(1, 5);
    const additionOperations = 9;
    const hiddenIndex = getRandomArbitrary(0, additionOperations);
    const members = getProgression(start, additionOperations, delta);
    const correctAnswer = String(members[hiddenIndex]);
    members[hiddenIndex] = '..';
    const question = String(members.join(' '));
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
