const mongoose = require('mongoose');
require('./index.js');

const { Schema } = mongoose;

const nearbySchema = new Schema({
  parentHouseId: Number,
  nearbyNum: Number,
  imgUrl: String,
  location: String,
  type: String,
  title: String,
  cost: String,
  stars: Number,
  reviewCount: Number,
  arrIndex: Number,
});

module.exports = mongoose.model('NearbyHouse', nearbySchema);
