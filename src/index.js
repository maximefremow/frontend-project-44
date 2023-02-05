import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  const number = (Math.round(Math.random() * 100));
  return number;
};

const getRandomArbitrary = (min, max) => {
  const numberArbitrary = Math.round(Math.random() * (max - min) + min);
  return numberArbitrary;
};
export { getRandomArbitrary, getRandomNumber };

const beginGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export default beginGame;
