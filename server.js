const dotenv = require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;

// create express app
const app = express();

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to MindQuil'})
});

// listens for requests
app.listen(PORT, () => {
    console.log(`Server listening on port, ${PORT}`);
});
