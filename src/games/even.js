import readlineSync from 'readline-sync';
import beginGame from '../index.js';

const num = () => {
  const number = (Math.round(Math.random() * 100));
  return number;
};

const game = () => {
  const games = beginGame();
  for (let i = 0; i < 3; i += 1) {
    const randomNum = num();
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question(`${'Your answer: '}`);
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${games}!`);
      return;
    } else if (answer === 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${games}!`);
      return;
    } else if (answer !== 'no' || answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${games}!`);
      return;
    }
  } console.log(`Congratulations, ${games}!`);
};
export default game;