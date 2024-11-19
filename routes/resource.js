var express = require('express');
var router = express.Router();
// Require controller modules.
var artifact_controller = require('../controllers/artifact');

// Artifacts Routes
router.get('/artifacts', artifact_controller.artifact_list);
router.get('/artifacts/:id', artifact_controller.artifact_detail);
router.post('/artifacts', artifact_controller.artifact_create_post);
router.delete('/artifacts/:id', artifact_controller.artifact_delete);
router.put('/artifacts/:id', artifact_controller.artifact_update_put);


module.exports = router;