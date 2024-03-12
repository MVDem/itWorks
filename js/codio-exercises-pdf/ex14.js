const language = prompt('choose language. Correct - suomi');
const isIsland =
  prompt('do you want to live on an island? y/n  Correct - y') === 'y'
    ? true
    : false;
const population = +prompt('choose population. Correct - 5.5');
const country = prompt('choose country. Correct - Finland');

const myCountry = {
  language: 'suomi',
  isIsland: false,
  population: 5.5,
  country: 'Finland',
};

const countryToLiveIn = (language, isIsland, population, country) => {
  if (language !== myCountry.language)
    return `${myCountry.country} does not meet your criteria`;
  if (isIsland !== myCountry.isIsland)
    return `${myCountry.country} does not meet your criteria`;
  if (population !== myCountry.population)
    return `${myCountry.country} does not meet your criteria`;
  if (country !== myCountry.country)
    return `${myCountry.country} does not meet your criteria`;
  return `You should live in ${myCountry.country}`;
};

alert(countryToLiveIn(language, isIsland, population, country));
