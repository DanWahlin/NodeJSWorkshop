const fs  = require('fs');

fs.readFile('data.txt', 'UTF-8', (err, fileData) => {
    if (err) {
        return console.log(err);
    }
    else {
        console.log('Retrieved file data: ' + fileData);
    }
});
