const mongoose = require('mongoose');

// model of travel entity to Mongo DB

const travelSchema = new mongoose.Schema ({
  name: String,
  phone: String,
  origin: String,
  destination: String,
  dateFrom: Date,
  dateTo: Date,
  people: Number
});

module.exports = mongoose.model('travel', travelSchema);