const router = require('express').Router();
const amenitiesController = require('../controllers/amenitiesController');

router.route('/').get(amenitiesController.index);

module.exports = router;