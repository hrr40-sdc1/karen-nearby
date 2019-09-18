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

const uniqueCitiesList = (count) => {
  const cityList = cityFaker(count);
  return cityList.filter((element, index, array) => array.findIndex((nodes) => nodes.cityName === element.cityName) === index).map((item, cityId) => {
    const { cityName, countryCode, City } = item;
    return {
      cityId,
      cityName,
      countryCode,
      City,
    };
  });
};

const getCities = (count) => new Promise((resolve, reject) => resolve(uniqueCitiesList(count)));
module.exports = getCities;
