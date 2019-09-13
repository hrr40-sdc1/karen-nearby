/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const NearbyHouse = require('../database/NearbyHouse.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));
app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  next();
});

app.get('/house/:parentHouseId', (req, res) => {
  const { parentHouseId } = req.params;
  NearbyHouse.find({ parentHouseId })
    .then((houses) => {
      res.send(houses);
    })
    .catch((error) => {
      res.send(error);
    });
});
app.get('/house/:parentHouseId/:nearbyNum', (req, res) => {
  const { parentHouseId, nearbyNum } = req.params;
  NearbyHouse.find({ parentHouseId, nearbyNum })
    .then((houses) => {
      res.send(houses);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.delete('/house/:parentHouseId/:nearbyNum', (req, res) => {
  const { parentHouseId, nearbyNum } = req.params;
  console.log('delete ', parentHouseId, nearbyNum);
  NearbyHouse.find({ parentHouseId, nearbyNum })
  .then((houses) => {
    console.log('house', houses);
  })
  .catch((error) => {
    res.send(error);
  });

  NearbyHouse.findOneAndDelete({ parentHouseId, nearbyNum })
    .then((house) => {
      res.send(house);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.put('/house/:parentHouseId/:nearbyNum', (req, res) => {
  const { parentHouseId, nearbyNum } = req.params;
  const { body } = req.body;
  console.log('put body', req.body);

  NearbyHouse.findOneAndUpdate({ parentHouseId, nearbyNum }, { $set: body }, { new: true })
    .then((data) => {
      console.log('data', data);
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post('/house/', (req, res) => {
  const { body } = req;
  console.log('post body', req.body);
  const newNearbyHouse = new NearbyHouse(body);
  newNearbyHouse.save(body)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}`));

module.exports = app;
