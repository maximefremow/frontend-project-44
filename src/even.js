import readlineSync from 'readline-sync';

function num() {
  const number = (Math.round(Math.random() * 100));
  return number;
}
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
export default function game() {
  for (let i = 0; i < 3; i += 1) {
    const answer = readlineSync.question(`${'Question: '}${num()}${'\nYour answer: '}`);
    if ((num() % 2 === 0 && answer === 'yes') || (num() % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    } else if (answer === 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
}
