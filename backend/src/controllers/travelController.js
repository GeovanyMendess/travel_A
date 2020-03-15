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
      numberOfPeople,
    } = request.body;

    // Creating date objects


    // Assuming the limit travelers to the same day, from the same origin and to the 
    // same destination is an arbitrary number, in this case 100

    // Finding all travels with the features above

    let travelEnt = await travel.findOne({
      phone
    });

    // Validation of the element
    if (!travelEnt) {
      travelEnt = await travel.create({
        name,
        phone,
        origin,
        destination,
        dateFrom,
        dateTo,
        numberOfPeople,
      });
    }
    return response.json(travelEnt);
  }
}