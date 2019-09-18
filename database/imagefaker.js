const fs = require('fs');
const path = require('path');

const readdir = (url) => new Promise((resolve, reject) => {
  fs.readdir(url, (err, filenames) => {
    if (err) {
      reject(err);
    } else { resolve(filenames); }
  });
});
const photoPaths = () => readdir(path.join('scripts', 'images'))
  .then((results) => results.map((item, photoId) => {
    const url = `https://hrr40-sdc1.s3-us-west-2.amazonaws.com/images/${item}`;
    return { photoId, url, Photo: 'Photo' };
  }))
  .then((photos) => new Promise((resolve, reject) => resolve(photos)))
  .catch((error) => console.log('error', error.message));

module.exports = photoPaths;
