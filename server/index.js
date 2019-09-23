/* eslint-disable new-cap */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const neo4j = require('neo4j-driver').v1;

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

app.get('/house/:houseId', (req, res) => {
  const { houseId } = req.params;
  const driver = neo4j.driver(
    'bolt://localhost',
    neo4j.auth.basic('neo4j', 'password'),
  );
  const session = driver.session(neo4j.session.READ);
  const getListingById = `MATCH (house:Listing {listingId: "${houseId}"}) RETURN house`;
  session.run(getListingById)
    .then((result) => {
      const { records } = result;
      const house = records[0].get('house');
      return house;
    })
    .then((id) => {
      const getListingsByCityId = `MATCH (:City { cityId: "${id.properties.cityId}" })-->(listing) RETURN listing LIMIT 8`;
      return session.run(getListingsByCityId)
        .then((result) => {
          const { records } = result;
          const houses = records.map((record) => record.get('listing').properties);
          res.status(200).json(houses);
        })
        .catch((e) => {
          // Output the error
          console.log(e);
        });
    })
    .catch((e) => {
    // Output the error
      console.log(e);
    })
    .then(() => {
      // Close the Session
      session.close();
    })
    .then(() => {
      // Close the Driver
      driver.close();
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
  const driver = neo4j.driver(
    'bolt://localhost',
    neo4j.auth.basic('neo4j', 'password'),
  );
  const session = driver.session();
  const {
    photo1, photo2, photo3, photo4, listingName, stars, reviews, type, cost,
  } = body;
  const createListing = 'CREATE (l:Listing { photo1: $photo1, photo2: $photo2, photos3: $photo3, photo4: $photo4, listingName: $listingName, stars: $stars, reviews: $reviews, type: $type, cost: $cost})';
  session.run(createListing, {
    photo1: photo1, photo2: photo2, photo3: photo3, photo4: photo4, listingName: listingName, stars: stars, reviews: reviews, type: type, cost: cost
})
    .then((result) => {
      console.log('result', result);
      res.status(200).json(result);
    })
    .catch((e) => {
    // Output the error
      console.log(e);
    })
    .then(() => {
      // Close the Session
      session.close();
    })
    .then(() => {
      // Close the Driver
      driver.close();
    });
});

app.listen(port, () => console.log(`App listening on port ${port}`));

module.exports = app;
