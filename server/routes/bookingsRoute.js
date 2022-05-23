const router = require('express').Router();
const bookingsController = require('../controllers/bookingsController');

router.route('/').get(bookingsController.index);

module.exports = router;