const express = require('express');
const router = express.Router();
const { getAllImagesController, searchImagesController } = require('../controllers/movieImageController');

// To get all images
router.get('/', getAllImagesController);

// To get images by search
router.get('/:query/:offset/:limit', searchImagesController);

module.exports = router;