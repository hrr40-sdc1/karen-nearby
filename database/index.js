/* eslint-disable no-console */
const mongoose = require('mongoose');

const mongoDBUrl = 'mongodb://localhost/nearbyPlaces'; // change local host to mongo instance


// eslint-disable-next-line no-unused-vars
mongoose.connect(mongoDBUrl, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log(err);
  }
});

const db = mongoose.connection;
db.collection('nearbyhouses');

module.exports = db;
