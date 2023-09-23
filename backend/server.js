const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const userRoutes = require('./routes/userRoutes');
const contentRoutes = require('./routes/contentRoutes');

// Import middleware
const authMiddleware = require('./middleware/auth');

const app = express();

// Database connection (assuming MongoDB here)
const uri = process.env.MONGO_URI;
console.log("URI:",uri);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS setup (if frontend & backend are on different domains/ports during development)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // replace '*' with your frontend domain in production
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Use routes
app.use('/api/users', userRoutes);  // Apply auth middleware to user routes
app.use('/api/content', contentRoutes);

// Handle undefined routes
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

const PORT = 5000; // You can choose any port; just ensure it doesn't conflict with other services
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
