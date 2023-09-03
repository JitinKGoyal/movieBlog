const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const con = require('../db');
const Movie = require('../models/Movie');
const User = require('../models/user');

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
    body('imdb', 'movie must have imdb rating').isNumeric(),
    body('tommato', 'movie must have tommato rating').isNumeric(),
    body('runningTime', 'movie must have runningTime').isLength({ min: 1 }),
    body('genre', 'movie must have genre').isLength({ min: 1 }),
    body('director', 'movie must have director').isLength({ min: 1 }),
    body('releaseDate', 'movie must have Release Date').isLength({ min: 1 }),
]


// Endpoint to post a note.
router.post('/', postNotesValidations, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let query = `select * from movie where title='${req.body.title}'`

    con.query(query, (err, movie) => {
        if (err) {
            console.log(err)
        }

        if (movie.length != 0) {
            res.status(400).json({ errors: [{ msg: "movie arlready exists" }] })
        } else {
            let { id, image } = req.body

            movieInput = {
                id,
                image
            }

            query = `INSERT INTO movie SET ?`

            con.query(query, movieInput, (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.json(result)
                }
            });
        }
    });
})


// API to get all notes of a user
router.get('/', async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let query = `select * from movie`

    con.query(query, (err, movies) => {
        if (err) {
            console.log(err);
        } else {
            res.json(movies)
        }
    });
})


// API to get all notes of a user
router.put('/', putNotesValidations, async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Movie.findById(req.body.id, async (err, movie) => {
        if (err) {
            return res.status(404).json({ error: "movie does not exist" });
        }

        movie = await Movie.findByIdAndUpdate(req.body.id, { $set: req.body }, { new: true });
        res.json(movie);
    });
})


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