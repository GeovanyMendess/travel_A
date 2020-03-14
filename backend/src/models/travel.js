const mongoose = require('mongoose');

// model of travel entity to Mongo DB

const travelSchema = new mongoose.Schema ({
  name: String,
  phone: Number,
  dateFrom: Date,
  dateTo: Date,
  origin: String,
  destination: String,
  numberOfPeople: Number,
});

module.exports = mongoose.model('travel', travelSchema);