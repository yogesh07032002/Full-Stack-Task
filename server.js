// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/electrifyit_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define routes
app.use('/api/vehicles', require('./routes/vehicles'));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
