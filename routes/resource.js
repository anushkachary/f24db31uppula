var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var artifact_controller = require('../controllers/artifact');

//router.get('/', api_controller.api);

// Artifacts Routes
router.get('/', artifact_controller.artifact_list);
router.get('/:id', artifact_controller.artifact_detail);
router.post('/:id', artifact_controller.artifact_create_post);
router.delete('/:id', artifact_controller.artifact_delete);
router.put('/:id', artifact_controller.artifact_update_put);

module.exports = router;