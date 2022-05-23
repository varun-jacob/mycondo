// import seed data files, arrays of objects
const bookingsData = require('../seed_data/bookings');
const amenitiesData = require('../seed_data/amenities');
const residentsData = require('../seed_data/residents');
const condosData = require('../seed_data/condos');

exports.seed = function (knex) {
  return knex('condos')
    .del()
    .then(function () {
      return knex('condos').insert(condosData);
    })
    .then(() => {
      return knex('residents').del();
    })
    .then(() => {
      return knex('residents').insert(residentsData);
    })
    .then(() => {
        return knex('amenities').del();
      })
      .then(() => {
        return knex('amenities').insert(amenitiesData);
      })
    .then(() => {
    return knex('bookings').del();
    })
    .then(() => {
    return knex('bookings').insert(bookingsData);
    });
};