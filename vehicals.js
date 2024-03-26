// routes/vehicles.js

const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
