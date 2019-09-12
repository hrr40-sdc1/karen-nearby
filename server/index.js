/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const NearbyHouse = require('../database/NearbyHouse.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../public`));
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  next();
});

app.get('/house/:houseId', (req, res) => {
  const { houseId } = req.params;
  NearbyHouse.find({ parentHouseId: houseId })
    .then((houses) => {
      res.send(houses);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.delete('/house/:houseId', (req, res) => {
  const { houseId } = req.params;
  NearbyHouse.findOneAndDelete({ parentHouseId: houseId })
    .then((house) => {
      res.send(house);
    })
    .catch((error) => {
      res.send(error);
    });
});
app.put('/house/:houseId', (req, res) => {
  const { houseId } = req.params;
  const { body } = req;
  console.log('body', body, houseId);
  NearbyHouse.findOne({ parentHouseId: houseId })
    .then((house) => {
      res.send(house);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post('/house/', (req, res) => {
  const { body } = req;
  const House = new NearbyHouse(body);
  House.save(body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}`));

module.exports = app;
