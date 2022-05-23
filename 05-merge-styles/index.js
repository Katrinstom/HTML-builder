const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    if (file.isFile() && path.extname(file.name) === '.css') {
      fs.readFile(path.join(__dirname, 'styles', file.name), (err, data) => {
        if (err) throw err;
        let newFile = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));
        newFile.write(`${data}`);
      });
    }
  });
});
