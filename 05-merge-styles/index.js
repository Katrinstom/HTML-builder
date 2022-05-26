const fs = require('fs');
const path = require('path');

const stream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

fs.readdir(path.join(__dirname, 'styles'), (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    if (path.extname(file, err) === '.css') {
      if (err) throw err;
      else {
        let bundle = path.join(__dirname, 'styles', file);
        let newStream = fs.createReadStream(bundle);

        newStream.on('data', (data, err) => {
          if (err) throw err;

          stream.write(data);
        });
      }
    }
  });
});
