const travelController = require ('./src/controllers/travelController');
const { Router } = require('express');

// Routes manipulator
const routes = Router();

// Route to the post method, requesting a travel registration on DB
routes.post('/travel',travelController.store);

module.exports = routes;