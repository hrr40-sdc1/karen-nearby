# HRR40 SDC - Housemania

> Software Development Capstone

## Related Projects

  - https://github.com/hrr40-sdc1/dj12589-description
  - https://github.com/hrr40-sdc1/atjandra_description
  - https://github.com/hrr40-sdc1/reviews
  -
## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [API](#api)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10
MongoDb

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
 "scripts": {
    "seed": "node ./database/seed.js",
    "dev": "nodemon ./server/index.js",
    "dev-react": "webpack -d --watch",
    "build": "webpack -p",
    "test": "jest --coverage --u",
    "test-server": "mocha --exit",
    "start": "node ./server/index.js"
  },
```

## API
- HTTP Verbs

### Get
  - /house/:parentHouseId/:nearbyNum
```
[
    {
        "_id": "5d7af74ca85e72d73c7be036",
        "parentHouseId": 90,
        "nearbyNum": 24,
        "imgUrl": "https://housemania.s3-us-west-1.amazonaws.com/camylla-battani-l8Y9fVgxrEE-unsplash.jpg",
        "location": "Leonieshire",
        "type": "deleniti",
        "title": "natus excepturi maiores magnam",
        "cost": "$261/night",
        "stars": 3,
        "reviewCount": 73,
        "arrIndex": 11,
        "__v": 0
    }
]
```

### Post
- /house/
```
 {
  parentHouseId: 1,
  nearbyNum: 1,
  imgUrl: 'http:house.jpg',
  location: 'close',
  type: 'house',
  title: 'a little bit of heaven',
  cost: '$65/night',
  stars: 4,
  reviewCount: 123,
  arrIndex: 1, }

```

### Delete
- /house/:parentHouseId/:nearbyNum
```
{
    "_id": "5d798bb1e2cae68d2935923d",
    "parentHouseId": 100,
    "nearbyNum": 40,
    "imgUrl": "https://housemania.s3-us-west-1.amazonaws.com/timothy-buck-psrloDbaZc8-unsplash.jpg",
    "location": "O'Connelltown",
    "type": "dolores",
    "title": "quia laudantium ut inventore",
    "cost": "$84/night",
    "stars": 4,
    "reviewCount": 285,
    "arrIndex": 0,
    "__v": 0
}
```


### Put
- /house/:parentHouseId/:nearbyNum

