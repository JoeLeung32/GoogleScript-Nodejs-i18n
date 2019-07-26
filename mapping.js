const local = (code = '') => {
  let locale;
  switch (code.toLowerCase()) {
    case 'tw':
    case 'zh-hk':
    case 'zh-tw':
      locale = 'zh-TW';
      break;
    default:
      locale = 'en';
      break;
  }
  return locale;
};

module.exports = {
  local
};
