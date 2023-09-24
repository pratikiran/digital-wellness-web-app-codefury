const express = require('express');
const contentController = require('../controllers/contentController');
const router = express.Router();

router.post('/create', contentController.createContent);

// Retrieve specific content by ID
router.get('/:id', contentController.getContent);

// Update specific content by ID
router.put('/:id', contentController.updateContent);

// Get specifc content by querying tags, isValid, author, and datePosted
router.get('/query', contentController.queryContent);

module.exports = router;
