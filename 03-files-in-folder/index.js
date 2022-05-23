const fs = require('fs');
const path = require('path');
const { stdout, stderr } = require('process');

const pathfolder = path.join(__dirname, 'secret-folder');

fs.readdir(pathfolder, { withFileTypes: true }, (err, files) => {
  if (err) console.log('Error!');
  else {
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.join(__dirname, 'secret-folder', file.name);
        fs.stat(filePath, (err, stats) => {
          if (err) console.log('Error!');
          process.stdout.write(`${path.basename(filePath, path.extname(filePath))} - ${path.extname(filePath).slice(1)} - ${stats.size / 1000}kb\n`);
        });
      }
    });
  }
});
