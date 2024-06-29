const express = require('express');
const { getProfile, getFavorites, addFavorite } = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/profile', auth, getProfile);
router.get('/favorites', auth, getFavorites);
router.post('/favorites', auth, addFavorite);

module.exports = router;
