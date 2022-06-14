let express = require('express');
let router = express.Router();

// Import user controller
const agenceController = require('./controllers/agenceController');
const destinationController = require('./controllers/destinationController');

router.get('/', (req, res) => res.redirect('/destination'));
router.get('/destination', destinationController.destinationList);
router.post('/destination', destinationController.destinationCreate)
router.put('/destination/:destination_id', destinationController.destinationUpdate);
router.delete('/destination/:destination_id', destinationController.destinationDelete);
router.get('/destination/find/:destination_id', destinationController.destinationFindOne);


router.get('/agence', agenceController.agenceList);
router.post('/agence', agenceController.agenceCreate);
router.put('/agence/:agence_id', agenceController.agenceUpdate);
router.delete('/agence/:agence_id', agenceController.agenceDelete);
router.get('/agence/find/:agence_id', agenceController.agenceFindOne);
router.post('/agence/addDestination/:agence_id', agenceController.agenceAddDestination);

module.exports = router;