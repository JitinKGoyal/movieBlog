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

module.exports = { addBulkController }