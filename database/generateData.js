/* eslint-disable no-console */
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const { Parser } = require('json2csv');

const getCities = require('./cityfaker.js');
const getPhotos = require('./imagefaker.js');
const getListings = require('./listingfaker.js');

const header = { header: false };

const csvWriter = (path, data) => {
  try {
    const parser = new Parser(header);
    const csv = parser.parse(data);
    fs.writeFileSync(path, csv);
    return 'success';
  } catch (err) {
    console.error(err.message);
    return err.message;
  }
};
getPhotos()
  .then((photos) => csvWriter(`database/csvs/photos-data${Date.now()}.csv`, photos))
  .catch((error) => console.log('error', error.message));

getCities(99000)
  .then((cities) => {
    csvWriter(`database/csvs/cities-data${Date.now()}.csv`, cities);
    return cities.reduce((acc, city) => acc.concat(city.cityId), []);
  })
  .then((ids) => {
    getListings(0, 2000000, ids)
      .then((listings) => csvWriter(`database/csvs/listings-data${Date.now()}.csv`, listings))
      .catch((error) => console.log('error', error.message));
  })
  .catch((error) => console.log('error', error.message));
