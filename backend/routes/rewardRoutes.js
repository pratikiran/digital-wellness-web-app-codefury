const express = require('express');
const auth = require('../middleware/auth');
const rewardController = require('../controllers/rewardController');

const router = express.Router();

// Increment challenges completed for a user
router.post('/increment-challenge', rewardController.incrementChallenge);

// Increment happy mood points for a user
router.post('/increment-mood', rewardController.incrementMood);

module.exports = router;
