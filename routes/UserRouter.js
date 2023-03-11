const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'GET all users'});
});

router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single user'});
});

router.post('/:id', (req, res) => {
    res.json({mssg: 'CREATES a new user'});
});

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE the user'});
});

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATES a user'});
});


// exports router
module.exports = router;
