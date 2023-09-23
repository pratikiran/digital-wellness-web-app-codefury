const Content = require('../models/content');

exports.createContent = async (req, res) => {
    try {
        const content = new Content(req.body);
        await content.save();
        res.status(201).send(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Add other functions as needed, e.g., updateContent, deleteContent, etc.
