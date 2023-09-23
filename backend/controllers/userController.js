const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Utility function to generate JWT tokens for a user
const generateAuthToken = async (user) => {
    const token = jwt.sign({ _id: user._id.toString() }, 'YOUR_SECRET_KEY', { expiresIn: '7d' });
    return token;
};

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        // Generate token for the newly registered user
        const token = await generateAuthToken(user);

        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
        }

        const token = await generateAuthToken(user);
        res.send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
};

// Add other functions as needed, e.g., updateUser, etc.
