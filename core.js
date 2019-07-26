const fs = require('fs');
const request = require('request');
const mapping = require('./mapping.js');

const download = (uri, filename, callback) => {
  request.head(uri, (err, res, body) => {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const checkFolderExistIfNotCreate = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
};

const readFile = (path, callback) => {
  fs.readFile(path, (error, data) => {
    if (error) throw error;
    callback(data);
  });
};

const writeFile = (path, data) => {
  fs.writeFileSync(path, data);
};

module.exports = {
  localMap: mapping.local,
  download,
  checkFolderExistIfNotCreate,
  readFile,
  writeFile
};
