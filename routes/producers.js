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
// SHOW – Show details of a producer
router.get('/:id/edit', async (req, res) => {
  try {
    const producer = await Producer.findById(req.params.id);
    res.render('producers/edit.ejs', { producer });
  } catch (err) {
    res.status(500).send(err.message);
  }
});
// DELETE – Remove a producer
router.delete('/:id', (req, res) => {
  Producer.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/producers');
    })
    .catch(err => {
      res.send(err.message);
    });
});

// EDIT – Form to edit one producer
router.get('/:id/edit', (req, res) => {
  Producer.findById(req.params.id)
    .then(foundProducer => {
      res.render('producers/edit.ejs', { producer: foundProducer });
    })
    .catch(err => {
      res.send(err.message);
    });
});
// UPDATE – Update a producer
router.put('/:id', (req, res) => {
  Producer.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect('/producers');
    })
    .catch(err => {
      res.send(err.message);
    });
});



module.exports = router;