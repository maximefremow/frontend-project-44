import playEngine, { getRandomArbitrary } from '../index.js';

const getProgression = (start, additionOperations, delta) => {
  const members = [];
  for (let i = 0; i <= additionOperations; i += 1) {
    members.push(start + delta * i);
  }
  return members;
};

const task = 'What number is missing in the progression?';
const generatedData = () => {
  const start = getRandomArbitrary(0, 10);
  const delta = getRandomArbitrary(1, 5);
  const additionOperations = 9;
  const hiddenIndex = getRandomArbitrary(0, additionOperations);
  const members = getProgression(start, additionOperations, delta);
  const correctAnswer = String(members[hiddenIndex]);
  members[hiddenIndex] = '..';
  const question = String(members.join(' '));
  return [question, correctAnswer];
};
const startGame = () => {
  playEngine(generatedData, task);
};

export default startGame;
