const router = require('express').Router();
const bookingsController = require('../controllers/bookingsController');

router.route('/').get(bookingsController.index);

router
    .route('/')
    .get(bookingsController.index)
    .post(bookingsController.addBooking);

router
    .route('/:id')
    .get(bookingsController.booking)    
    .put(bookingsController.updateBooking)
    .delete(bookingsController.deleteBooking);

module.exports = router;