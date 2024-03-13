const populations = [45, 22, 150, 80];
const population = 7900;

const percentageOfWorld = (countryPopulation, population) => {
  const num = (countryPopulation / population) * 100;

  return num.toFixed(2) + '%';
};

const populationPercentages = (arr) => {
  const percentages = [];
  for (let i = 0; i < arr.length; i++) {
    const percent = percentageOfWorld(arr[i], population);
    percentages.push(percent);
  }
  return percentages;
};

console.log(populationPercentages(populations));
