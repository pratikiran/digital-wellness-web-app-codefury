const express = require('express');
const contentController = require('../controllers/contentController');
const router = express.Router();

router.post('/create', contentController.createContent);
// Add other routes as needed, e.g., /update, /delete, etc.

module.exports = router;
