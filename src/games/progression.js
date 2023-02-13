import playEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (initialNumber, additionOperations, differenceBetweenNumbers) => {
  const members = [];
  for (let i = 0; i <= additionOperations; i += 1) {
    members.push(initialNumber + differenceBetweenNumbers * i);
  }
  return members;
};
const additionOperations = 9;
const task = 'What number is missing in the progression?';
const generatedData = () => {
  const initialNumber = getRandomNumber(0, 10);
  const differenceBetweenNumbers = getRandomNumber(1, 5);
  const hiddenIndex = getRandomNumber(0, additionOperations);
  const members = getProgression(initialNumber, additionOperations, differenceBetweenNumbers);
  const correctAnswer = String(members[hiddenIndex]);
  members[hiddenIndex] = '..';
  const question = String(members.join(' '));
  return [question, correctAnswer];
};
const startGame = () => {
  playEngine(generatedData, task);
};

export default startGame;
