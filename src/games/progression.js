import getPlayGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (initialNumber, additionOperations, differenceBetweenNumbers) => {
  const members = [];
  for (let i = 0; i <= additionOperations; i += 1) {
    members.push(initialNumber + differenceBetweenNumbers * i);
  }
  return members;
};

const task = 'What number is missing in the progression?';
const additionOperations = 9;
const firstNumberOfTheStep = 1;
const lastNumberOfTheStep = 5;

const generateData = () => {
  const initialNumber = getRandomNumber();
  const differenceBetweenNumbers = getRandomNumber(firstNumberOfTheStep, lastNumberOfTheStep);
  const hiddenIndex = getRandomNumber(0, additionOperations);
  const members = getProgression(initialNumber, additionOperations, differenceBetweenNumbers);
  const correctAnswer = String(members[hiddenIndex]);
  members[hiddenIndex] = '..';
  const question = members.join(' ');
  return [question, correctAnswer];
};
const startGame = () => {
  getPlayGame(generateData, task);
};

export default startGame;
