# i18n With Google Sheet
Manage language pack for your team/group member and export to json.

**Last tested**: Node: v12.6.0

## Google Sheet
1. [Template](https://docs.google.com/spreadsheets/d/17Hrn4yieCzO8B0-ArHNpM0PqcBOPjP4Eo2xVtWVqlU0/edit#gid=0)

## Google Script
1. Paste your Google Sheet URL to `spreadSheetURL` in `./GoogleScript/script.gs`
1. Add your code in **Script editor**
	1. On your computer, open a spreadsheet at [sheets.google.com](sheets.google.com).
	1. Click Tools and then Script editor.
	1. Paste your code.
	1. Click Save.
1. Deploy as web app in Script editor.
	1. Deploy as web app.
	1. Enter your project name.
	1. Enter your version as you like.
	1. Allow `Anyone, even anonymous` to access your app.
	1. Click Deploy.

## Download and genJson
1. Paste your deployed script url in `./env#DOWNLOAD_TARGET`.
1. Run `npm install`
1. Run `npm start` or `node index.js`
1. You will find your json in `./json/` folder.
