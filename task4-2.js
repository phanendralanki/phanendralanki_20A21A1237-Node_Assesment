// app.js

const listFiles = require('./task4-1');

const directoryName = './Node-lists';
const fileExtension = 'txt';

listFiles(directoryName, fileExtension, (err, files) => {
  if (err) {
    console.error('Error occurred:', err);
  } else {
    console.log('Filtered list of files:', files);
  }
});
