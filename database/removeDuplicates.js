// const list = require('./moviesList.json')
const movieData = require('./moviesData.json')
const fs = require('fs');


function writeFile(params) {

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

}

const removeDuplicateJsons = () => {
    let newArray = [];
    movieData.forEach((movie, i) => {
        let exist = newArray.find(e => e.title === movie.title)
        exist && console.log('loading...', i, exist?.title);
        !exist && newArray.push(movie)
    })

    console.log(newArray.length)
    const filePath = 'newListWithoutDuplicate.json'
    fs.writeFile(filePath, JSON.stringify(newArray), (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
        } else {
            console.log(`Data has been written to ${filePath}`);
        }
    });
}

removeDuplicateJsons()