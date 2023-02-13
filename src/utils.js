const getRandomNumber = (min = 0, max = 30) => {
  const numberArbitrary = Math.round(Math.random() * (max - min) + min);
  return numberArbitrary;
};
export default getRandomNumber;
