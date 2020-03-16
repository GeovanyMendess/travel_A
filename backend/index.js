// Imported libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

// Initializing aplication
const app = express();

// connectiing to database
mongoose.connect('mongodb+srv://Geovany:7wf3e23QYyEP7st@cluster0-siiem.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (request, response)=> {
});

// Midlleware managers
app.use(cors());
// This allow the aplication understand the the JSON format
app.use(express.json());
// Controlling routes
app.use(routes);

// Chosing a door to the aplication
app.listen(3333);
