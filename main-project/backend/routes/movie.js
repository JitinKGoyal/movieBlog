const { request } = require('express');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const con = require('../db');
const Movie = require('../models/Movie');
const User = require('../models/user');
const { addBulkController } = require('../controllers/movieController');

const postNotesValidations = [
    body('title', 'movie must have a title').isLength({ min: 1 }),
    body('description', 'movie must have a description').isLength({ min: 1 }),
    body('detail', 'movie must have detail field as object').isObject()
]

const deleteNotesValidations = [
    body('id', 'movie can not be deleted without id').isLength({ min: 1 }),
]

const putNotesValidations = [
    body('id', 'movie can not be updated without id').exists(),
    body('title', 'movie must have a title').isLength({ min: 1 }),
    body('description', 'movie must have a description').isLength({ min: 1 }),
    body('detail', 'movie must have detail field as object').isObject()
]

router.post('/addBulk', addBulkController)

// Endpoint to post a movie.
router.post('/', postNotesValidations, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let query = `select * from movie where title='${req.body.title}'`

    con.query(query, (err, movie) => {
        if (err) {
            console.log(err);
        }

        if (movie.length != 0) {
            res.status(400).json({ errors: [{ msg: "movie arlready exists" }] })
        } else {
            let { image, title, detail, description, date } = req.body

            movieInput = {
                title,
                detail: JSON.stringify(detail),
                description: description,
                date
            }

            query = `INSERT INTO movie SET ?`

            con.query(query, movieInput, (err, result) => {
                if (err) {
                    console.log("error in adding movie: ", err)
                }
                else {

                    let imageInput = {
                        id: result.insertId,
                        image
                    }

                    query = `INSERT INTO movieimage SET ?`
                    con.query(query, imageInput, (err, result) => {
                        if (err) {
                            console.log("error in adding image: ", err)
                        } else {
                            res.json(result)
                        }
                    });

                    // res.json(result)
                }
            });

            // For add image

        }
    });
})

// Endpoint to post a movie.
router.put('/', postNotesValidations, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let query = `select * from movie where id=${req.body.id}`

    con.query(query, (err, movie) => {
        if (err) {
            console.log(err);
        }

        if (movie.length == 0) {
            res.status(400).json({ errors: [{ msg: "movie does not exists" }] })
        } else {
            let { image, title, detail, description } = req.body

            movieInput = {
                title,
                detail: JSON.stringify(detail),
                description: description,
            }

            query = `UPDATE movie SET ? WHERE id=${req.body.id}`

            con.query(query, movieInput, (err, result) => {
                if (err) {
                    console.log("error in updating movie: ", err)
                }
                else {
                    if (image) {

                        let imageInput = {
                            id: req.body.id,
                            image
                        }

                        query = `UPDATE movieimage SET ? WHERE id=${req.body.id}`
                        con.query(query, imageInput, (err, result) => {
                            if (err) {
                                console.log("error in updating image: ", err)
                            } else {
                                res.json(result)
                            }
                        });
                    } else {
                        res.json(result)
                    }

                }
            });

            // For add image
        }
    });
})

// API to get all movies of a user
router.get('/', async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let query = `select * from movie`

        con.query(query, (err, movies) => {
            if (err) {
                console.log(err);
                res.status(400).send({ errors: [{ msg: err.message }] })
            } else {
                res.json(movies)
            }
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: error.message }] })

    }
})

// API to get movies by pagination
router.get('/pagination/:offset/:limit', async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let query = `select * from movie LIMIT ${req.params.offset}, ${req.params.limit}`

        con.query(query, (err, movies) => {
            if (err) {
                console.log(err);
                res.status(400).send({ errors: [{ msg: err.message }] })
            } else {
                res.json(movies)
            }
        });
    } catch (error) {
        res.status(500).send({ errors: [{ msg: error.message }] })

    }
})

// API to get all notes of a user
router.get('/image/:id', async (req, res) => {

    let query = `select * from movieimage where id= ${req.params.id}`

    con.query(query, (err, image) => {
        if (err) {
            console.log(err);
        } else {
            res.json(image)
        }
    });
})

// API to get all notes of a user
// router.put('/', putNotesValidations, async (req, res) => {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     Movie.findById(req.body.id, async (err, movie) => {
//         if (err) {
//             return res.status(404).json({ error: "movie does not exist" });
//         }

//         movie = await Movie.findByIdAndUpdate(req.body.id, { $set: req.body }, { new: true });

//         res.json(movie);

//     });

// })

// API to delete a note
router.delete('/', deleteNotesValidations, (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Movie.findById(req.body.id, async (err, note) => {

    //     if (err) {
    //         return res.status(404).json({ error: "note does not exists" });
    //     }

    //     note = await Movie.findByIdAndDelete(req.body.id);

    //     res.json(note);
    // });

    let query = `select * from movie where id=${req.body.id}`

    con.query(query, (err, movie) => {
        if (err) {
            console.log(err);
        }

        if (movie.length != 0) {

            query = `DELETE FROM movie WHERE id=?`

            con.query(query, req.body.id);

            res.json("Deleted successfully")
        } else {
            res.status(400).json({ errors: [{ msg: "movie does not exists" }] })

        }

    });



})


module.exports = router;