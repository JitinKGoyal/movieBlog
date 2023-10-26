const imgArr = require('./imgUrlsData.json')
const movieData = require('../finalData.json')

function getImagesForSingleMovie(title = '') {

    let resultArr = imgArr;
    title.split(' ').forEach(e => {
        resultArr = resultArr.filter(url => url.toLowerCase().includes(e.toLowerCase()))
    })

    return resultArr

}

function moviesImages() {
    const obj = {}
    movieData.forEach(movie => {
        let arr = getImagesForSingleMovie(movie.title)
        obj[movie.title] = arr
    })

    console.log(obj)
}

moviesImages()