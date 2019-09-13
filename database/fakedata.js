/* eslint-disable no-console */
const faker = require('faker');

const fakeData = (count) => {
  console.log('count', count);
  const nearby = [];
  const imgArr = [
    'aaron-huber-G7sE2S4Lab4-unsplash.jpg',
    'annie-spratt-BmjlyHwV1S0-unsplash.jpg',
    'behy-studio-nATj9ajl_D0-unsplash.jpg',
    'camylla-battani-l8Y9fVgxrEE-unsplash.jpg',
    'dallin-hassard-Syerh5b5UN0-unsplash.jpg',
    'deborah-cortelazzi-gREquCUXQLI-unsplash.jpg',
    'devin-kleu-4jjzDlartfA-unsplash.jpg',
    'grovemade-vfIx29EsLHA-unsplash.jpg',
    'grovemade-vfIx29EsLHA-unsplash.jpg',
    'minh-pham-7pCFUybP_P8-unsplash.jpg',
    'nathan-van-egmond-CXpK83c6Y1M-unsplash.jpg',
    'patrick-perkins-3wylDrjxH-E-unsplash.jpg',
    'pnEtsdgBeBE.jpg',
    'rahul-chakraborty-dv9AoOYegRc-unsplash.jpg',
    'spencer-_-HHWwqWV6d5k-unsplash.jpg',
    'sweet-ice-cream-photography-lFpqHAmeLZg-unsplash.jpg',
    'timothy-buck-psrloDbaZc8-unsplash.jpg',
    'travel-cents-WYLuNY5JG4E-unsplash.jpg',
  ];
  for (let id = 1; id <= count; id += 1) {
    const parentHouseId = faker.random.number({
      min: 1,
      max: 100,
    });
    const location = faker.address.city();
    const type = faker.lorem.words(1);
    const title = faker.lorem.words(4);
    const cost = faker.random.number({
      min: 60,
      max: 800,
    });
    const reviewCount = faker.random.number({
      min: 0,
      max: 600,
    });
    const stars = faker.random.number({
      min: 3,
      max: 5,
    });
    const nearId = faker.random.number({
      min: 1,
      max: 16,
    });
    const num = faker.random.number({
      min: 0,
      max: 16,
    });
    nearby.push({
      parentHouseId,
      nearId,
      imgUrl: imgArr[num],
      location,
      type,
      title,
      cost,
      stars,
      reviewCount,
    });
  }
  return { data: nearby };
};

module.exports = fakeData;
