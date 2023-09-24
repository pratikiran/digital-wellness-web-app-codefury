const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Make sure to replace 'YOUR_SECRET_KEY' with your actual secret
        req.userId = decoded._id; // Changed from `decoded.userId` to `decoded._id` based on the JWT token's structure
        next();
    } catch (error) {
        console.error("Authentication error:", error.message);
        res.status(401).send({ error: "Please authenticate." });
    }
};

module.exports = auth;
