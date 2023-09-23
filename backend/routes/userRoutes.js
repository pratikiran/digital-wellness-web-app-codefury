const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/signup', userController.createUser);

router.post('/login', userController.loginUser);

// Add other routes as needed, e.g., /update, etc.

module.exports = router;
