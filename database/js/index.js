const { removeDuplicateJsons, convertKeysToCamelCase, moveKeysToTop } = require("./utilityFunctions");
const movieData = require("../moviesData.json");
const fs = require("fs");


let movies = removeDuplicateJsons(movieData)
movies = movies.map(item => convertKeysToCamelCase(item));
movies = movies.map(item => moveKeysToTop(item));


const filePath = 'finalData.json'
fs.writeFile(filePath, JSON.stringify(movies), (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
    } else {
        console.log(`Data has been written to ${filePath}`);
    }
});

console.log('Final length', movies.length)