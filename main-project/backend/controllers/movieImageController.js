const allImages = require('../data/imgUrlsData.json')
// const con = require('../db')
const { getImagesFromAllSites } = require('../utils/utilityFunctions/getOnlineImages')

const getAllImagesController = (req, res) => {
    res.send({ data: allImages })
}

const searchImagesController = (req, res) => {
    const { query, limit, offset } = req.params;

    let images = allImages.filter(e => e.includes(query.toLowerCase()));
    const total = images.length;
    images = images.slice(offset, parseInt(offset) + parseInt(limit));

    res.send({ total, data: images });
}

const getOnlineImagesDataForStorageController = async (req, res) => {

    try {
        let data = await getImagesFromAllSites(req.params.query)
        data = data.flat(Infinity)
        res.send({ total: data.length, data });

    } catch (error) {
        console.log(error.message);
    }

}

const setImgFromWebsite = async (req, res) => {
    try {
        const title = req.params.title

        let query = `SELECT * FROM movie;`

        // Get all movies data
        con.query(query, async (err, data) => {
            if (err) {
                res.status(400).send({ errors: [{ msg: err.message }] })
            } else {

                let result = []
                let count = 1;

                for (movie of data) {
                    await new Promise((resolve, reject) => {
                        // Parse movie data that is stored as String
                        movie.data = JSON?.parse(movie.data) || {};

                        // Set title as query
                        const MovieQuery = movie.title.replaceAll(' ', '+').replaceAll("'", '');

                        // Get all images
                        console.log("getting data for movie No", count++, "and movie", movie.title)
                        getImagesFromAllSites(MovieQuery)
                            .then((images) => {
                                images = images.flat(Infinity)
                                movie.data.images = images || [];

                                const id = movie.id
                                const data = JSON.stringify(movie.data)

                                let updateQuery = `UPDATE movie SET data = ? WHERE id=${id};`

                                con.query(updateQuery, data, (err, data) => {
                                    if (err) {
                                        console.log(err)
                                        resolve()
                                        result.push({
                                            err: err.message,
                                            imgCount: images.length,
                                            movie: movie.title
                                        })

                                    } else {
                                        result.push({
                                            imgCount: images.length,
                                            movie: movie.title
                                        })

                                        resolve()
                                    }
                                });
                            })
                    })
                }

                console.log("All Done")
                res.send({ data: result })
                // Promise.all(promises)
                //     .then((data) => {
                //     })
                //     .catch(err => () => {
                //         res.status(500).send({ err: err })
                //     })
            }
        });

    } catch (error) {
        res.status(500).send({ errors: [{ msg: error.message }] })

    }
}

module.exports = { getAllImagesController, searchImagesController, getOnlineImagesDataForStorageController, setImgFromWebsite }