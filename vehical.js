// models/Vehicle.js

const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
