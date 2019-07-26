require('dotenv').config();

const core = require('./core.js');

const SAVE_AS = `${process.env.SAVE_FOLDER}all.json`;
const SAVE_AS_LANG = `${process.env.SAVE_FOLDER}**.json`;

core.checkFolderExistIfNotCreate(process.env.SAVE_FOLDER);

core.download(process.env.DOWNLOAD_TARGET, SAVE_AS, () => {
  core.readFile(SAVE_AS, (data) => {
    const localeObject = {};
    const { locale = {} } = JSON.parse(data);

    if (locale) {
      locale.map((item) => {
        const itemData = item;
        const code = itemData.i;
        delete (itemData.i);
        Object.keys(itemData).forEach((localeKey) => {
          const langKey = core.localMap(localeKey);
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
        const save = SAVE_AS_LANG.replace('**', key);
        core.writeFile(save, JSONData);
      });
    }
  });
});
