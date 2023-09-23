const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    // Add other fields as needed, e.g., author, tags, etc.
});

module.exports = mongoose.model('Content', contentSchema);
