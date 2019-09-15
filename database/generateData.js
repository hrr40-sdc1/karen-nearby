/* eslint-disable no-console */
const fs = require('fs');
const getCities = require('./cityfaker.js');
const { Parser } = require('json2csv');

const fields = ['city', 'countryCode'];
const opts = { fields };

getCities(100000)
  .then((fullList) => fullList.filter((element, index, array) => array.findIndex((nodes) => nodes.city === element.city) === index))
  .then((city) => {
    try {
      const parser = new Parser(opts);
      const csv = parser.parse(city);
      //console.log(csv);
      fs.writeFileSync('city.csv', csv)
    } catch (err) {
      console.error(err);
    }
  })
  .catch((error) => console.log('error', error))
