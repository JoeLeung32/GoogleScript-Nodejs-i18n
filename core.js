const fs = require('fs');
const request = require('request');
const mappingData = require('./mapping.json');

const mapping = (code = '') => {
  const allowedLocal = Object.keys(mappingData)
    .filter(data => data === code
      .replace('_','-')
      .toLowerCase()
    );
  if (allowedLocal) {
    return mappingData[allowedLocal];
  }
  return 'en';
};

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
  mapping,
  download,
  checkFolderExistIfNotCreate,
  readFile,
  writeFile
};
