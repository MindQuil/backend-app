const express = require('express');

const router = express.Router();

router.get('/therapists', (req, res) => {
  res.json({ mssg: 'GET  list of all therapists' });
});

router.get('/therapists:id', (req, res) => {
  res.json({ mssg: 'GET a specific therapist by ID' });
});

router.post('/therapists', (req, res) => {
  res.json({ mssg: 'Create a new therapist' });
});

router.delete('/therapi=sts/:id', (req, res) => {
  res.json({ mssg: 'Delete an existing therapist by ID' });
});

router.patch('/therapists/:id', (req, res) => {
  res.json({ mssg: '/therapists/:id' });
});

// exports router
module.exports = router;
