var express = require('express');
const artifact_controller = require('../controllers/artifact');
var router = express.Router();

// GET request to fetch all artifacts
router.get('/', artifact_controller.artifact_list);

// POST request to create a new artifact
router.post('/artifacts', artifact_controller.artifact_create_post);
router.get('/artifacts/:id', artifact_controller.artifact_detail);
router.put('/artifacts/:id', artifact_controller.artifact_update_put);
router.delete('/artifacts/:id', artifact_controller.artifact_delete);
module.exports = router;