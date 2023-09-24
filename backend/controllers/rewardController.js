const Reward = require('../models/reward');

// Increment challenges completed for a user
exports.incrementChallenge = async (req, res) => {
    try {
        const userId = req.user._id;  // Assuming user's ID is attached to the request by the auth middleware

        // Find the reward entry and increment the challengesCompleted by 1
        const reward = await Reward.findOneAndUpdate(
            { userId: userId },
            { $inc: { challengesCompleted: 1 } },
            { new: true, upsert: true }  // Return the updated document and create one if it doesn't exist
        );

        res.send(reward);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Increment happy mood points for a user
exports.incrementMood = async (req, res) => {
    try {
        const userId = req.user._id;  // Assuming user's ID is attached to the request by the auth middleware

        // Find the reward entry and increment the happyMoodPoints by 1
        const reward = await Reward.findOneAndUpdate(
            { userId: userId },
            { $inc: { happyMoodPoints: 1 } },
            { new: true, upsert: true }  // Return the updated document and create one if it doesn't exist
        );

        res.send(reward);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
