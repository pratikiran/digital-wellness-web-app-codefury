const Content = require("../models/content");

exports.createContent = async (req, res) => {
    try {
        const content = new Content(req.body);
        await content.save();
        res.status(201).send(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Retrieve specific content by ID
exports.getContent = async (req, res) => {
    try {
        const contentId = req.params.id;
        const content = await Content.findById(contentId);

        if (!content) {
            return res.status(404).send({ message: "Content not found" });
        }

        res.send(content);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

// Update specific content by ID
exports.updateContent = async (req, res) => {
    try {
        const contentId = req.params.id;
        const content = await Content.findByIdAndUpdate(contentId, req.body, {
            new: true,
        });

        if (!content) {
            return res.status(404).send({ message: "Content not found" });
        }

        res.send(content);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Fetch content based on dynamic query criteria
exports.queryContent = async (req, res) => {
    try {
        const query = {};

        if (req.query.tags) {
            query.tags = { $all: req.query.tags.split(",") }; // Match all tags in the provided list
        }

        if (req.query.isValid) {
            query.isValid = req.query.isValid.toLowerCase() === "true";
        }

        if (req.query.username) {
            query.author = req.query.username; // Matching the author field to the provided username
        }

        if (req.query.datePosted) {
            query.datePosted = new Date(req.query.datePosted);
        }

        const contents = await Content.find(query);
        res.send(contents);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
