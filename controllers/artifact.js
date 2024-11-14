var Artifact = require('../models/artifact');
// List of all Costumes
exports.artifact_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Artifact list');
};
// for a specific Costume.
exports.artifact_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Artifact detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.artifact_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Artifact create POST');
};
// Handle Costume delete from on DELETE.
exports.artifact_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Artifact delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.artifact_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Artifact update PUT' + req.params.id);
};