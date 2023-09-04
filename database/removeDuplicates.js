const list = require('./moviesList.json')
const fs = require('fs');

// console.log(list.length)
const newList = JSON.stringify([...new Set(list)])
const filePath = 'newList.json'

fs.writeFile(filePath, newList, (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
    } else {
        console.log(`Data has been written to ${filePath}`);
    }
});