/* eslint-disable no-console */
const faker = require('faker');

const listingFaker = (start, end) => {
  const listings = [];
  for (let listingId = start; listingId < end; listingId += 1) {
    const cityId = faker.random.number({
      min: 0,
      max: 65000,
    });
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
    const photo1 = faker.random.number({
      min: 0,
      max: 1000,
    });
    const photo2 = faker.random.number({
      min: 0,
      max: 1000,
    });
    const photo3 = faker.random.number({
      min: 0,
      max: 1000,
    });
    const photo4 = faker.random.number({
      min: 0,
      max: 1000,
    });
    listings.push({
      listingId,
      listingName,
      photo1: `${photo1}.jpg`,
      photo2: `${photo2}.jpg`,
      photo3: `${photo3}.jpg`,
      photo4: `${photo4}.jpg`,
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

const getListings = (start, end) => new Promise((resolve, reject) => resolve(listingFaker(start, end)));
module.exports = getListings;
