const mongoose = require('mongoose');

const rewardSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    challengesCompleted: {
        type: Number,
        default: 0
    },
    happyMoodPoints: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Reward', rewardSchema);
