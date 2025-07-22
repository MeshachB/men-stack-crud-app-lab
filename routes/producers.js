// routes/producers.js

const express = require('express');
const router = express.Router();
const Producer = require('../models/producer');

// INDEX – Show all producers
router.get('/', async (req, res) => {
  try {
    const allProducers = await Producer.find({});
    res.render('producers/index.ejs', { producers: allProducers });
  } catch (err) {
    res.status(500).send(`Error retrieving producers: ${err.message}`);
  }
});

// NEW – Form to create a new producer
router.get('/new', (req, res) => {
  res.render('producers/new.ejs');
});

// CREATE – Handle form submission to create producer
router.post('/', async (req, res) => {
  try {
    await Producer.create(req.body);
    res.redirect('/producers');
  } catch (err) {
    res.status(500).send(`Error creating producer: ${err.message}`);
  }
}); 

// CREATE – Handle form submission to create producer
router.post('/', async (req, res) => {
  try {
    await Producer.create(req.body);
    res.redirect('/producers');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


module.exports = router;