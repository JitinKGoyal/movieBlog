
const axios = require("axios");
const cheerio = require("cheerio");
const { WEBSITES } = require('../../constants/wallpaperWebsites')

function getUrlsForSinglePage(url) {

    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {

                const html = response.data;
                const $ = cheerio.load(html);
                const imgUrls = [];

                $('img').each((i, elem) => {
                    const imgUrl = $(elem).attr('data-src');
                    if (imgUrl) {
                        imgUrls.push(imgUrl);
                    }
                });

                resolve(imgUrls)

            })
            .catch((error) => {
                console.error('Error:', error.message);
                resolve([])
            });
    })
}

async function getImgUrls(url) {
    const promiseArr = [];
    try {

        // max read 500 pages
        for (let i = 1; i <= 1; i++) {
            // Addp page no.
            promiseArr.push(new Promise((resolve, reject) => {
                const fullUrl = url + i;
                console.log("Getting data for page -- " + i + ' : ' + fullUrl)

                let breakFlag = false;
                // Get images in one page
                getUrlsForSinglePage(fullUrl)
                    .then(imgurls => {
                        resolve(imgurls)
                    })
                    .catch(err => {
                        resolve([])
                        console.log("Error2: ", err.message)
                    })

                // break if no images on page
            }))

        }

        return Promise.all(promiseArr)
    } catch (error) {
        console.log("Error3: ", error.message)
    }
}

const getImagesFromAllSites = async (query) => {

    try {
        let promiseArr = []
        console.log("Searching for .............................." + query)
        WEBSITES.forEach(async url => {

            promiseArr.push(new Promise(resolve => {
                let newUrl = url.replace('---', query)
                getImgUrls(newUrl)
                    .then(images => {
                        resolve(images)
                    })
                    .catch(error => {
                        resolve([])
                        console.log("error in getting data for ", newUrl, error);
                    })

            }))

        })

        return Promise.all(promiseArr);

    } catch (error) {
        console.log("Error1::", error)
    }

}

// add images to  a movie
const addImagesToMovie = async (movie) => {
    const MovieQuery = movie.title.replaceAll(' ', '+').replaceAll("'", '');

    // Get all images
    console.log("Getting data for movie", movie.title)
    let images = await getImagesFromAllSites(MovieQuery)
    movie.images = images.flat(Infinity);

    return movie;
}

module.exports = { getImagesFromAllSites, addImagesToMovie }