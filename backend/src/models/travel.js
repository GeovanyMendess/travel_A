const mongoose = require('mongoose');

// Model of travel entity to Mongo DB
const travelSchema = new mongoose.Schema ({
  name: String,
  phone: String,
  origin: String,
  destination: String,
  dateFrom: Date,
  dateTo: Date,
  people: Number
});

// Exporting the model
module.exports = mongoose.model('travel', travelSchema);