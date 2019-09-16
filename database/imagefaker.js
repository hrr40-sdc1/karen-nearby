const fs = require('fs');
const path = require('path');
const location = path.join('scripts', 'images');

const readdir = (url) => {
    return new Promise(function (resolve, reject) {
        fs.readdir(url, function (err, filenames) {
            if (err)
                reject(err);
            else
                resolve(filenames);
        });
    });
};

const getImages = () => new Promise((resolve, reject) => resolve(readdir(location)));
module.exports = getImages;
