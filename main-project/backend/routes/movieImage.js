const express = require('express');
const router = express.Router();
const { getAllImagesController, searchImagesController, getOnlineImagesDataForStorageController, setImgFromWebsite } = require('../controllers/movieImageController');

// To get all images
router.get('/', getAllImagesController);

// To get images by search
router.get('/:query/:offset/:limit', searchImagesController);

router.get('/seacrchFromWeb/:query', getOnlineImagesDataForStorageController)

router.get('/setImgFromWeb', setImgFromWebsite)

module.exports = router;