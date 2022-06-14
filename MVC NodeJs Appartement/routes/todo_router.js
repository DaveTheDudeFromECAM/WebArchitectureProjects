// Get an instance of the express Router and set routes
let express = require('express');
let router = express.Router();

// Import contact controller
let apartmentController = require('../controllers/apartment_controller');

router.get('/apartments',apartmentController.apartmentList);

router.get('/apartment/add', apartmentController.apartmentAdd);

router.post('/apartment/new', apartmentController.apartmentnew);

module.exports = router;
