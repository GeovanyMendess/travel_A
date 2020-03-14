// imported libraries
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

// initializing aplication
const app = express();

// connectiing to database
mongoose.connect('mongodb+srv://Geovany:7wf3e23QYyEP7st@cluster0-siiem.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (request, response)=> {
  return response.json({message : 'Olá mundo'});
});

// Midlleware managers
// This allow the aplication understand the the JSON format
app.use(express.json());
app.use(routes);

// Chosing a door to the aplication
app.listen(3333);
