const mongoose = require('mongoose');

// model of travel entity to Mongo DB

const travelSchema = new mongoose.Schema ({
  name: String,
  phone: Number,
  origin: String,
  destination: String,
  dateFrom: Date,
  dateTo: Date,
  numberOfPeople: Number,
});

module.exports = mongoose.model('travel', travelSchema);