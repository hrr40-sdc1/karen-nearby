/* eslint-disable no-console */
const fs = require('fs');
const { Parser } = require('json2csv');

const getCities = require('./cityfaker.js');
const getPhotos = require('./imagefaker.js');
const getListings = require('./listingfaker.js');

getCities(100000)
  .then((fullList) => {
    return fullList.filter((element, index, array) => array.findIndex((nodes) => nodes.cityName === element.cityName) === index).map((item, cityId) => {
      const { cityName, countryCode, City } = item;
      return { cityId, cityName, countryCode, City };
    });
  })
  .then((cities) => {
    try {
      const parser = new Parser();
      const csv = parser.parse(cities);
      fs.writeFileSync('cities.csv', csv);
    } catch (err) {
      console.error(err);
    }
  })
  .then(() => {
    getPhotos()
      .then((filenames) => filenames)
      .then((results) => {
        return results.map((item, photoId) => {
          let url = `https://hrr40-sdc1.s3-us-west-2.amazonaws.com/images/${item}`;
          return { photoId, url, Photo: 'Photo' };
        });
      })
      .then((photos) => {
        try {
          const parser = new Parser();
          const csv = parser.parse(photos);
          fs.writeFileSync('photos.csv', csv)
        } catch (err) {
          console.error(err.message);
        }
      })
      .catch((error) => console.log('error', error.message))
  })
  .catch((error) => console.log('error', error.message));

getListings(8000001, 10000000)
  .then((listings) => {
    try {
      const parser = new Parser();
      const csv = parser.parse(listings);
      fs.writeFileSync('listings-part5.csv', csv);
    } catch (err) {
      console.error(err.message);
    }
  })
  .catch((error) => console.log('error', error.message));
