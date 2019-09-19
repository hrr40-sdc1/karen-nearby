/* eslint-disable no-console */
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const { Parser } = require('json2csv');

const getCities = require('./fakers/cityfaker.js');
const getPhotos = require('./fakers/imagefaker.js');
const getListings = require('./fakers/listingfaker.js');

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
  .then((photos) => csvWriter('database/csvs/photos-data1k.csv', photos))
  .catch((error) => console.log('error', error.message));

getCities(99000)
  .then((cities) => {
    csvWriter(`database/csvs/cities-data${cities.length}.csv`, cities);
    return cities.length;
  })
  .then((count) => {
    console.log(count);
    getListings(0, 2000000, count)
      .then((listings) => {
        csvWriter('database/csvs/listings-data2m.csv', listings);
      })
      .then(() => {
        getListings(2000001, 4000000, count)
          .then((listings) => {
            csvWriter('database/csvs/listings-data4m.csv', listings);
          })
          .then(() => {
            getListings(4000001, 6000000, count)
              .then((listings) => {
                csvWriter('database/csvs/listings-data6m.csv', listings);
              })
              .then(() => {
                getListings(6000001, 8000000, count)
                  .then((listings) => {
                    csvWriter('database/csvs/listings-data8m.csv', listings);
                  })
                  .then(() => {
                    getListings(8000001, 10000000, count)
                      .then((listings) => {
                        csvWriter('database/csvs/listings-data10m.csv', listings);
                      });
                  });
              });
          });
      })
      .catch((error) => console.log('error', error.message));
  })
  .catch((error) => console.log('error', error.message));
