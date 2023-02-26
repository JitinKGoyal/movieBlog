const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Movie = require('../models/Movie');
const User = require('../models/user');

const postNotesValidations = [
    body('title', 'movie must have a title').isLength({ min: 1 }),
    body('description', 'movie must have a description').isLength({ min: 1 }),
    body('imdb', 'movie must have imdb rating').isNumeric(),
    body('tommato', 'movie must have tommato rating').isNumeric(),
    body('runningTime', 'movie must have runningTime').isLength({ min: 1 }),
    body('genre', 'movie must have genre').isLength({ min: 1 }),
    body('director', 'movie must have director').isLength({ min: 1 }),
    body('releaseDate', 'movie must have Release Date').isLength({ min: 1 }),
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

    const movie = await Movie.findOne({ email: req.body.title }); // 2sec

    if (movie) {
        return res.status(400).json({ errors: [{ msg: "user already exists" }] });
    }

    const { title, description, tag, imdb, tommato, runningTime, genre, director, releaseDate } = req.body

    Movie.create({
        title,
        description,
        tag,
        imdb,
        tommato,
        runningTime,
        genre,
        director,
        releaseDate
    }).then(note => res.json(note));

})


// API to get all notes of a user
router.get('/', async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // const user = await User.findById(req.params.userId);

    // if (!user) return res.status(404).json({ error: "user does not exist" });

    const notes = await Movie.find();

    res.json(notes);

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

    Movie.findById(req.body.id, async (err, note) => {

        if (err) {
            return res.status(404).json({ error: "note does not exists" });
        }

        note = await Movie.findByIdAndDelete(req.body.id);

        res.json(note);
    });

})


module.exports = router;