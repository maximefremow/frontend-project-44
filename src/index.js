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

const playEngine = (generatedData, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generatedData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
export default playEngine;
