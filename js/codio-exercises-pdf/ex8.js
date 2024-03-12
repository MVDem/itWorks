const population = 7900;

function percentageOfWorld1(countryPopulation, population) {
  const num = (countryPopulation / population) * 100;

  return num.toFixed(2) + '%';
}

const francePercPop1 = percentageOfWorld1(68, population);
const spainPercPop1 = percentageOfWorld1(47, population);
const japanPercPop1 = percentageOfWorld1(125, population);

console.log(francePercPop1, spainPercPop1, japanPercPop1);

const percentageOfWorld = (countryPopulation, population) => {
  const num = (countryPopulation / population) * 100;

  return num.toFixed(2) + '%';
};

const francePercPop = percentageOfWorld(68, population);
const spainPercPop = percentageOfWorld(47, population);
const japanPercPop = percentageOfWorld(125, population);

console.log(francePercPop, spainPercPop, japanPercPop);
