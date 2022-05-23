const router = require('express').Router();
const condosController = require('../controllers/condosController');

router.route('/').get(condosController.index);

module.exports = router;