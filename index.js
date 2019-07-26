require('dotenv').config();

const core = require('./core.js');

core.checkFolderExistIfNotCreate(process.env.SAVE_FOLDER);

core.download(process.env.DOWNLOAD_TARGET, process.env.SAVE_AS_ALL, () => {
  core.readFile(process.env.SAVE_AS_ALL, (data) => {
    const localeObject = {};
    const { locale = {} } = JSON.parse(data);

    if (locale) {
      locale.map((item) => {
        const itemData = item;
        const code = itemData.i;
        delete (itemData.i);
        Object.keys(itemData).forEach((localeKey) => {
          const langKey = core.mapping(localeKey);
          if (typeof localeObject[langKey] === 'undefined') {
            localeObject[langKey] = {};
          }
          if (typeof localeObject[langKey][code] === 'undefined') {
            localeObject[langKey][code] = itemData[localeKey];
          }
        });
      });
    }

    if (localeObject) {
      Object.keys(localeObject).forEach((key) => {
        const JSONData = JSON.stringify(localeObject[key]);
        const save = process.env.SAVE_AS_OTH.replace('**', key);
        core.writeFile(save, JSONData);
      });
    }
  });
});
