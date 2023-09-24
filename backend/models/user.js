const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    },
    fullName: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    profilePicture: { 
        type: String,
        default: null 
    },
    phoneNumber: {
        type: String,
        unique: true,
        match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number']
    }
});

userSchema.pre('save', async function(next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

module.exports = mongoose.model('User', userSchema);
