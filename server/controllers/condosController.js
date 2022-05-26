const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('condos')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Condos: ${err}`)
    );
};

//Read (GET) request for single condo
exports.condo = ((req, res) => {
  knex('condos')
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
              message: `Error getting condo ${req.params.id} ${err}`
          })
      })
});

//Read (GET) request for single condo residents
exports.condoResidents = (req, res) => {
  knex('residents')
  .where({ condo_id: req.params.id })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) =>
    res
      .status(400)
      .send(
        `Error retrieving residents for condo ${req.params.id} ${err}`
      )
  );
};

//Read (GET) request for single condo amenities
exports.condoAmenities = (req, res) => {
  knex('amenities')
  .where({ condo_id: req.params.id })
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) =>
    res
      .status(400)
      .send(
        `Error retrieving amenities for condo ${req.params.id} ${err}`
      )
  );
};

//Read (GET) request for single condo bookings
exports.condoBookings = (req, res) => {
knex('bookings')
.where({ condo_id: req.params.id })
.then((data) => {
  res.status(200).json(data);
})
.catch((err) =>
  res
    .status(400)
    .send(
      `Error retrieving bookings for condo ${req.params.id} ${err}`
    )
);
};

//Create (POST) request for condo
exports.addCondo = (req, res) => {
// Validate the request body for required data
const { condo_id, unit, name, phone, email, password } = req.body;

if (!condo_id || !unit || !name || !phone || !email || !password) {
return res.status(400).send('Please make sure to provide condo_id, unit, name, phone, email, password fields in a request');
}

const hashedPassword = bcrypt.hashSync(password, 12);

const newCondo = {
  condo_id: condo_id,
  unit: unit,
  name: name,
  phone: phone,
  email: email,
  password: hashedPassword,
};

knex('condos')
.insert(newCondo)
.then((data) => {
  // For POST requests we need to respond with 201 and the location of the newly created record
  const newCondoURL = `/condos/${data[0]}`;
  res.status(201).location(newCondoURL).send(newCondoURL);
})
.catch((err) => res.status(400).send(`Error creating condo: ${err}`));
};

//Update (PUT) request for condo
exports.updateCondo = (req, res) => {
knex('condos')
.update(req.body)
.where({ id: req.params.id })
.then(() => {
  res.status(200).send(`condo with id: ${req.params.id} has been updated`);
})
.catch((err) =>
  res.status(400).send(`Error updating condo with id: ${req.params.id} ${err}`)
);
};

//Delete (DELETE) request for condo
exports.deleteCondo = (req, res) => {
knex('condos')
.delete()
.where({ id: req.params.id })
.then(() => {
  // For DELETE response we can use 204 status code
  res.status(204).send(`condo with id: ${req.params.id} has been deleted`);
})
.catch((err) =>
  res.status(400).send(`Error deleting condo ${req.params.id} ${err}`)
);
};