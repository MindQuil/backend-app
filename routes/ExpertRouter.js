const express = require('express');

const router = express.Router();

router.get('/api/therapists', (req, res) => {
    res.json({mssg: 'GET  list of all therapists'});
});

router.get('/api/therapists:id', (req, res) => {
    res.json({mssg: 'GET a specific therapist by ID'});
});

router.post('/api/therapists', (req, res) => {
    res.json({mssg: 'Create a new therapist'});
});

router.delete('/api/therapi=sts/:id', (req, res) => {
    res.json({mssg: 'Delete an existing therapist by ID'});
});

router.patch('/api/therapists/:id', (req, res) => {
    res.json({mssg: '/api/therapists/:id'});
});


// exports router
module.exports = router;
