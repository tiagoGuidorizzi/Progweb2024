const express = require('express');
const { getProfile, getFavorites } = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/profile', auth, getProfile);
router.get('/favorites', auth, getFavorites);

module.exports = router;
