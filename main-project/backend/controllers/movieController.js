const con = require("../db");
const { saveTOdb } = require("../utils/utilityFunctions/addMovies");
const { convertKeysToCamelCase, moveKeysToTop } = require("../utils/utilityFunctions/formatNewData");
const { getImagesFromAllSites, addImagesToMovie } = require("../utils/utilityFunctions/getOnlineImages");

const addBulkController = async (req, res) => {

    try {
        let movies = req.body

        if (Array.isArray(movies)) {

            console.log("-------------------------------------------------------------Conveting keys to camel case-------------------------------------------------------------")
            movies = movies.map(item => convertKeysToCamelCase(item));

            console.log("-------------------------------------------------------------Moving Keys To Top-------------------------------------------------------------")
            movies = movies.map(item => moveKeysToTop(item));

            console.log("-------------------------------------------------------------Adding Images To Movie-------------------------------------------------------------")
            let promises = movies.map(item => addImagesToMovie(item));
            movies = await Promise.all(promises)

            console.log(movies)

            console.log("-------------------------------------------------------------Saving TO db-------------------------------------------------------------")
            let result = await saveTOdb(movies)
            res.send({ data: result })
        } else {
            return res.status(400).send({ msg: 'payload must be an array' })
        }
    } catch (error) {

    }
}

const totalMovieCountController = async (req, res) => {

    try {
        let query = `SELECT COUNT(*) FROM movie`

        con.query(query, (err, count) => {
            if (err) {
                res.status(400).send({ errors: [{ msg: err.message }] })
            } else {
                res.json({ data: count[0]["COUNT(*)"] })
            }
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: error.message }] })
    }

}

const updateMovieController = (req, res) => {
    try {
        const id = req.params.id
        const data = JSON.stringify(req.body);

        let query = `UPDATE movie
        SET data = ?
        WHERE id=${id};`

        con.query(query, data, (err, data) => {
            if (err) {
                res.status(400).send({ errors: [{ msg: err.message }] })
            } else {
                res.json({ data })
            }
        });

    } catch (error) {
        res.status(500).send({ errors: [{ msg: error.message }] })

    }
}

const getMovieByTitleController = (req, res) => {
    try {
        const title = req.params.title

        let query = `SELECT * FROM movie where title='${title}';`

        con.query(query, (err, data) => {
            if (err) {
                res.status(400).send({ errors: [{ msg: err.message }] })
            } else {
                res.json({ data })
            }
        });

    } catch (error) {
        res.status(500).send({ errors: [{ msg: error.message }] })

    }
}

module.exports = { addBulkController, totalMovieCountController, updateMovieController, getMovieByTitleController }