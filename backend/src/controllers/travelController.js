const travel = require('../models/travel');

module.exports = {
  // async will allow to force await the request ends until the next step

  // listing itens and returning 
  // async index(request, response) {
  //   const travelData = await travel.find();
  //   return response.json(travelData);
  // },

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

    // Creating date objects


    // Assuming the limit travelers to the same day, from the same origin and to the 
    // same destination is an arbitrary number, in this case 100

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