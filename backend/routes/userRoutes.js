const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth')
const router = express.Router();

router.post('/signup', userController.createUser);

router.post('/login', userController.loginUser);

router.get('/profile', auth, userController.getUserProfile);

router.get('/rewards', auth, userController.getUserRewards);

module.exports = router;
