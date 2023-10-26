const { default: axios } = require("axios");
const cheerio = require("cheerio");

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
    let urls = []

    try {

        // max read 1000 pages
        for (let i = 1; i <= 50; i++) {
            console.log("Getting data for page -- " + i)
            // Addp page no.
            const fullUrl = url + i;

            // Get images in one page
            const imgurls = await getUrlsForSinglePage(fullUrl)

            // break if no images on page
            if (imgurls.length == 0) break;
            urls.push(...imgurls)
        }

        return urls
    } catch (error) {
        console.log(error.message)
    }
}

const

// getImgUrls('https://www.wallpaperflare.com/search?wallpaper=movie&page=').then(data => {
//     console.log(data)
//     console.log(data.length)
// })