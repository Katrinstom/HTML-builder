const { stdin, stdout } = process;
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(filePath);

stdout.write('Hello! Write something here:\n');
stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit'){
      stdout.write('Text file was created. Good bye!\n'); 
      process.exit();
    } else {
      output.write(data.toString());
    } 
  });

process.on('SIGINT', () => {
    stdout.write('\nText file was created. Good bye!\n'); 
    process.exit();
});


