const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    datePosted: {
        type: Date,
        default: Date.now,
    },
    references: {
        type: [String],
        default: [],
    },
    isValid: {
        type: Boolean,
        default: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
});

module.exports = mongoose.model("Content", contentSchema);
