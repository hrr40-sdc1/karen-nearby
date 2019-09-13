const Promise = require('bluebird');
const db = require('./index.js');
const NearbyHouse = require('./NearbyHouse.js');
const houses = require('./houses.js');

const seedData = () => {
  Promise.each(houses, (house) => {
    const parentHouseId = house.id;
    return Promise.each(house.nearby, (nearby) => {
      const newNearbyHouse = {
        parentHouseId,
        nearbyNum: nearby.nearId,
        imgUrl: nearby.imgUrl,
        location: nearby.location,
        type: nearby.type,
        title: nearby.title,
        cost: nearby.cost,
        stars: nearby.stars,
        reviewCount: nearby.reviewCount,
        arrIndex: nearby.arrIndex,
      };
      return NearbyHouse.create([newNearbyHouse]);
    });
  })
    .then(() => db.close());
};

seedData();
