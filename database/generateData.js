/* eslint-disable no-console */
const fs = require('fs');
const { Parser } = require('json2csv');

const getCities = require('./cityfaker.js');
const getImages = require('./imagefaker.js');

const cityfields = ['city', 'countryCode', 'count'];
const imageFields = ['url', 'id'];
const cityopts = { cityfields };
const imageoptions = { imageFields };

getCities(100000)
  .then((fullList) => fullList.filter((element, index, array) => array.findIndex((nodes) => nodes.city === element.city) === index))
  .then((city) => {
    try {
      const parser = new Parser(cityopts);
      const csv = parser.parse(city);
      //console.log(csv);
      fs.writeFileSync('city.csv', csv)
    } catch (err) {
      console.error(err);
    }
  })
  .catch((error) => console.log('error', error));

getImages()
  .then((filenames) => filenames)
  .then((results) => {
    return results.map((item, id) => {
      let image = `https://hrr40-sdc1.s3-us-west-2.amazonaws.com/images/${item}`;
      return { id, image };
    });
  })
  .then((images) => {
    try {
      const parser = new Parser(imageoptions);
      const csv = parser.parse(images);
      fs.writeFileSync('images.csv', csv)
    } catch (err) {
      console.error(err.message);
    }
  })
  .catch((error) => console.log('error', error.message))


