const router = require('express').Router();
const condosController = require('../controllers/condosController');

router
    .route('/')
    .get(condosController.index)
    .post(condosController.addCondo);

router
    .route('/:id')
    .get(condosController.condo)    
    .put(condosController.updateCondo)
    .delete(condosController.deleteCondo);

router
    .route('/:id/residents')
    .get(condosController.condoResidents);

router
    .route('/:id/amenities')
    .get(condosController.condoAmenities);

router
    .route('/:id/bookings')
    .get(condosController.condoBookings);

module.exports = router;