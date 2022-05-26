const router = require('express').Router();
const { default: knex } = require('knex');
const residentsController = require('../controllers/residentsController');

router
    .route('/')
    .get(residentsController.index)
    .post(residentsController.addResident);

router
    .route('/:id')
    .get(residentsController.resident)    
    .put(residentsController.updateResident)
    .delete(residentsController.deleteResident);

router
    .route('/:id/bookings')
    .get(residentsController.residentBookings);


router
    .route('/:id/login')
    .get(residentsController.residentLogin);
    
module.exports = router;