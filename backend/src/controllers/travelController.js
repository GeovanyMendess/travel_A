const travel = require('../models/travel');

module.exports = {
  //Async will allow to force await the request ends until the next step

  async store(request, response) {
    const {
      name,
      phone,
      origin,
      destination,
      dateFrom,
      dateTo,
      people
    } = request.body;

    // Finding all travels with the features above
    let travelEnt = await travel.findOne({
      name,
      phone,
      origin,
      destination,
      dateFrom,
      dateTo,
    });

    // Validation of the element to avoid duplicate values
    // But it allows the user to register a same travel, but with
    // a different number of travelers
    if (!travelEnt) {
      travelEnt = await travel.create({
        name,
        phone,
        origin,
        destination,
        dateFrom,
        dateTo,
        people
      });
    }
    return response.json(travelEnt);
  }
}