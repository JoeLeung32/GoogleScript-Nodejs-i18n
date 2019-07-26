function doGet(e) {
  // Change Spread Sheet url
  const spreadSheetURL = 'https://docs.google.com/spreadsheets/d/17Hrn4yieCzO8B0-ArHNpM0PqcBOPjP4Eo2xVtWVqlU0/edit#gid=0';
  const ss = SpreadsheetApp.openByUrl(spreadSheetURL);

  // Sheet Name, Chnage Sheet1 to Users in Spread Sheet. Or any other name as you wish
  const sheet = ss.getSheetByName("Global");
  return getData(sheet);
}


function getData(sheet) {
  var jo = {};
  var dataArray = [];

  // collecting data from 2nd Row , 1st column to last row and last column
  const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();

  for (var i = 0, l = rows.length; i < l; i++) {
    var dataRow = rows[i];
    var record = {};
    record['i'] = dataRow[0];
    record['en'] = dataRow[1];
    record['tw'] = dataRow[2];
    dataArray.push(record);
  }

  jo.locale = dataArray;
  const result = JSON.stringify(jo);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
