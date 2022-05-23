const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('residents')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Residents: ${err}`)
    );
};

//Read (GET) request for single resident
exports.resident = ((req, res) => {
        knex('residents')
            .where({id: req.params.id })
            .then((data) => {
                //If record is not found respond with 404
				if (!data.length) {
				return res.status(404).send(`Record with id: ${req.params.id} is not found`);
				}
                res.status(200).json(data[0]);
            })
            .catch((err)=>{
                res.status(400).json({
                    message: `Error getting resident ${req.params.id} ${err}`
                })
            })
    });

//Read (GET) request for single resident bookings
exports.residentBookings = (req, res) => {
    knex('bookings')
      .where({ resident_id: req.params.id })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res
          .status(400)
          .send(
            `Error retrieving bookings for Resident ${req.params.id} ${err}`
          )
      );
  };

//Create (POST) request for resident
exports.addResident = (req, res) => {
    // Validate the request body for required data
    if (!req.body.condo_id || !req.body.unit || !req.body.name || !req.body.phone || !req.body.email || !req.body.password) {
      return res.status(400).send('Please make sure to provide condo_id, unit, name, phone, email, password fields in a request');
    }
  
    knex('residents')
      .insert(req.body)
      .then((data) => {
        // For POST requests we need to respond with 201 and the location of the newly created record
        const newResidentURL = `/residents/${data[0]}`;
        res.status(201).location(newResidentURL).send(newResidentURL);
      })
      .catch((err) => res.status(400).send(`Error creating Resident: ${err}`));
  };

//Update (PUT) request for resident
exports.updateResident = (req, res) => {
    knex('residents')
      .update(req.body)
      .where({ id: req.params.id })
      .then(() => {
        res.status(200).send(`Resident with id: ${req.params.id} has been updated`);
      })
      .catch((err) =>
        res.status(400).send(`Error updating Resident with id: ${req.params.id} ${err}`)
      );
  };

//Delete (DELETE) request for resident
exports.deleteResident = (req, res) => {
    knex('residents')
      .delete()
      .where({ id: req.params.id })
      .then(() => {
        // For DELETE response we can use 204 status code
        res.status(204).send(`Resident with id: ${req.params.id} has been deleted`);
      })
      .catch((err) =>
        res.status(400).send(`Error deleting Resident ${req.params.id} ${err}`)
      );
  };