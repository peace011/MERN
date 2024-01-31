const express = require('express');
const router = express.Router();

// Define routes for the '/api/auth' endpoint
router.get('/', (req, res) => {
    res.status(200).send("Welcome to our world using router");
});

module.exports = router;
