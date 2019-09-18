/* eslint-disable no-console */
const faker = require('faker');

const listingFaker = (start, end, ids) => {
  console.log(ids.length);
  const listings = [];
  for (let listingId = start; listingId < end; listingId += 1) {
    const cityId = faker.random.arrayElement(ids);
    const type = faker.random.arrayElement(['Entire place', 'Private Room', 'Shared Room']);
    const listingName = faker.lorem.words(2);
    const cost = faker.random.number({
      min: 60,
      max: 800,
    });
    const reviews = faker.random.number({
      min: 0,
      max: 600,
    });
    const stars = faker.random.number({
      min: 3,
      max: 5,
    });
    const photoId = faker.random.number({
      min: 0,
      max: 1000,
    });
    listings.push({
      listingId,
      listingName,
      photoId,
      cityId,
      cost,
      stars,
      reviews,
      type,
      Listing: 'Listing',
    });
  }
  return listings;
};

const getListings = (start, end, cities) => new Promise((resolve, reject) => resolve(listingFaker(start, end, cities)));
module.exports = getListings;
