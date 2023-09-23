const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {  // Ensure this is hashed before saving
        type: String,
        required: true
    },
    // Add other fields as needed, e.g., email, profile picture, etc.
});

userSchema.pre('save', async function(next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

module.exports = mongoose.model('User', userSchema);
