const travelController = require ('./src/controllers/travelController');
const { Router } = require('express');

// Routes manipulator
const routes = Router();

routes.post('/travel',travelController.store);

module.exports = routes;