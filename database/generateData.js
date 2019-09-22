/* eslint-disable no-console */
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const { parseAsync } = require('json2csv');
const getListings = require('./fakers/listingfaker.js');

const header = { header: false };

const csvWriter = (path, data) => {
  parseAsync(data, header)
    .then((csv) => fs.writeFileSync(path, csv))
    .catch((err) => console.error(err));
};

getListings(9000000, 10000000)
  .then((listings) => {
    csvWriter('database/csvs/listings-data10m.csv', listings);
  })
  .catch((error) => console.log('error', error.message));
