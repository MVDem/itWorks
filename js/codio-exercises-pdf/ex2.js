const countryInfo = (country, population, capitalCity) => {
  console.log(
    country +
      'has ' +
      population +
      ' million people and its capital city is ' +
      capitalCity
  );
};

const countries = [
  { country: 'Spain', population: 47, capitalCity: 'Madrid' },
  { country: 'France', population: 68, capitalCity: 'Paris' },
  { country: 'Japan', population: 125, capitalCity: 'Tokio ' },
];

countries.map((elem) => {
  countryInfo(elem.country, elem.population, elem.capitalCity);
});
