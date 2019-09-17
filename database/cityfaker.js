/* eslint-disable no-console */
const faker = require('faker');

const cityFaker = (count) => {
  const cities = [];
  for (let id = 1; id <= count; id += 1) {
    const cityName = faker.address.city();
    const countryCode = faker.address.country();
    cities.push({
      cityName,
      countryCode,
      City: 'City',
    });
  }
  return cities;
};
const getCities = (count) => new Promise((resolve, reject) => resolve(cityFaker(count)));
module.exports = getCities;
