const con = require("../db");

const addBulkController = async (req, res) => {
    try {

        let response = {
            duplicates: {
                number: 0,
                titles: []
            },
            successfullyAdded: {
                number: 0,
                titles: [],
            }
        }

        if (Array.isArray(req.body)) {

            const promises = req.body.map(async movie => {

                movie.title.includes("'") && console.log('movie.title', movie.title, movie.title.includes("'"))

                if (movie.title.includes("'")) {
                    movie.title = movie.title.replace("'", "")
                }

                let query = `select * from movie where title='${movie.title || movie.Title}'`;
                await new Promise((resolve, reject) => {
                    con.query(query, (err, movies) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        }

                        if (movies.length != 0) {
                            response.duplicates.titles.push(movie.title || movie.Title);
                            response.duplicates.number++;
                            resolve()
                        } else {

                            movieInput = {
                                title: movie.title || movie.Title,
                                data: JSON.stringify(movie),
                                date: new Date().toString()
                            }

                            query = `INSERT INTO movie SET ?`

                            con.query(query, movieInput, (err, _) => {
                                if (err) {
                                    console.log("error in adding movie: " + movie.title || movie.Title, err)
                                    reject(err);
                                }
                                else {
                                    response.successfullyAdded.titles.push(movie.title || movie.Title);
                                    response.successfullyAdded.number++;
                                    resolve()
                                }
                            });
                        }
                    });
                })

            })

            await Promise.all(promises)
            return res.status(201).json(response);
        } else {
            return res.status(400).json({ errors: [{ msg: 'payload must be an array' }] });
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({ errors: [{ msg: error.message }] })
    }

}

const totalMovieCountController = (req, res) => {

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