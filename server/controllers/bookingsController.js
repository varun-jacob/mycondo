const knex = require('knex')(require('../knexfile').development);

exports.index = (_req, res) => {
  knex('bookings')
    .leftJoin('amenities', 'bookings.amenity_id', '=', 'amenities.id')
    .select('bookings.id', 'bookings.condo_id', 'bookings.resident_id', 'bookings.amenity_id', 'bookings.date', 'bookings.start_time', 'bookings.end_time','bookings.updated_at', 'amenities.name')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Bookings: ${err}`)
    );
};

//Read (GET) request for single booking
exports.booking = ((req, res) => {
  knex('bookings')
      .leftJoin('amenities', 'bookings.amenity_id', '=', 'amenities.id')
      .select('bookings.id', 'bookings.condo_id', 'bookings.resident_id', 'bookings.amenity_id', 'bookings.date', 'bookings.start_time', 'bookings.end_time','bookings.updated_at', 'amenities.name')
      .where({'bookings.id': req.params.id })
      .then((data) => {
          //If record is not found respond with 404
  if (!data.length) {
  return res.status(404).send(`Record with id: ${req.params.id} is not found`);
  }
          res.status(200).json(data[0]);
      })
      .catch((err)=>{
          res.status(400).json({
              message: `Error getting booking ${req.params.id} ${err}`
          })
      })
});

//Create (POST) request for booking
exports.addBooking = (req, res) => {
// Validate the request body for required data
const { condo_id, resident_id, amenity_id, date, start_time, end_time} = req.body;

if (!condo_id || !resident_id || !amenity_id || !date || !start_time || !end_time ) {
return res.status(400).send('Please make sure to provide condo_id, resident_id, amenity_id, date, start_time, end_time fields in a request');
}

const newBooking = {
  condo_id: condo_id,
  resident_id: resident_id,
  amenity_id: amenity_id,
  date: date,
  start_time: start_time,
  end_time: end_time,
};

knex('bookings')
.insert(newBooking)
.then((data) => {
  // For POST requests we need to respond with 201 and the location of the newly created record
  const newbookingURL = `/bookings/${data[0]}`;
  res.status(201).location(newbookingURL).send(newbookingURL);
})
.catch((err) => res.status(400).send(`Error creating booking: ${err}`));
};

//Update (PUT) request for booking
exports.updateBooking = (req, res) => {
knex('bookings')
.update(req.body)
.where({ id: req.params.id })
.then(() => {
  res.status(200).send(`Booking with id: ${req.params.id} has been updated`);
})
.catch((err) =>
  res.status(400).send(`Error updating booking with id: ${req.params.id} ${err}`)
);
};

//Delete (DELETE) request for booking
exports.deleteBooking = (req, res) => {
knex('bookings')
.delete()
.where({ id: req.params.id })
.then(() => {
  // For DELETE response we can use 204 status code
  res.status(204).send(`Booking with id: ${req.params.id} has been deleted`);
})
.catch((err) =>
  res.status(400).send(`Error deleting booking ${req.params.id} ${err}`)
);
};