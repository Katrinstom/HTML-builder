const fs = require('fs');
const path = require('path');

const pathFolder = path.join(__dirname, 'files');
const newFolder = path.join(__dirname, 'files-copy');

fs.mkdir(newFolder, { recursive: true }, (err) => {
    if (err) console.log('Error!');
  });
  fs.readdir(newFolder, { withFileTypes: true }, (err, files) => {
    if (err) console.log('Error!');
    else {
      files.forEach(file => {
        if (file.isFile()) {
          fs.unlink(path.join(__dirname, 'files-copy', file.name), (err) => {
            if (err) console.log('Error!');
          });
        }
      });
    }
  });
  fs.readdir(pathFolder, { withFileTypes: true }, (err, files) => {
    if (err) console.log('Error!');
    else {
      files.forEach(file => {
        if (file.isFile()) {
          fs.copyFile(path.join(__dirname, 'files', file.name), path.join(__dirname, 'files-copy', file.name), (err) => {
            if (err) console.log('Error!');
          });
        }
      });
    }
  });
