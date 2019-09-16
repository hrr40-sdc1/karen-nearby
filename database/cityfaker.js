/* eslint-disable no-console */
const faker = require('faker');

const cityFaker = (count) => {
  const cities = [];
  for (let i = 1; i <= count; i += 1) {
    const city = faker.address.city();
    const countryCode = faker.address.country();
    cities.push({
      city,
      countryCode,
      count,
    });
  }
  return cities;
};
const getCities = (count) => new Promise((resolve, reject) => resolve(cityFaker(count)));
module.exports = getCities;
