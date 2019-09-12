# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [API](#api)

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
  - /house/:houseId
### Post

- /house/:houseId
```
 { parentHouseId: 1,
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

- /house/:houseId
### Put

- /house/:houseId
