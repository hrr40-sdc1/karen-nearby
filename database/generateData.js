/* eslint-disable no-console */
const fs = require('fs');
const fakeData = require('./fakedata.js');

const data = fakeData(1000);
fs.writeFileSync('data.json', JSON.stringify(data.data, null, '\t'));
