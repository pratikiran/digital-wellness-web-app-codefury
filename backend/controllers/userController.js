const User = require('../models/user');
const Reward = require('../models/reward')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateAuthToken = async (user) => {
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return token;
};

exports.createUser = async (req, res) => {
    try {
        if (!req.body.username || !req.body.password || !req.body.fullName || !req.body.email) {
            return res.status(400).send({ error: 'Required fields are missing!' });
        }
        const user = new User(req.body);
        await user.save();
        const reward = new Reward({ userId: user._id });
        await reward.save();
        const token = await generateAuthToken(user);
        res.status(201).send({ user, token });
    } catch (error) {
        if (error.code && error.code === 11000) {
            res.status(400).send({ error: 'Username, Email, or Phone Number already exists!' });
        } else {
            res.status(400).send({ error: error.message });
        }
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send({ error: 'Username and password are required!' });
        }

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
        res.status(400).send({ error: error.message });
    }
};

exports.getUserProfile = async (req, res) => {
    try {
        res.send(req.user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.getUserRewards = async (req, res) => {
    try {
        const userId = req.user._id;
        const reward = await Reward.findOne({ userId: userId });
        
        if (!reward) {
            return res.status(404).send({ message: 'No rewards found for this user' });
        }
        
        res.send(reward);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
