var Artifact = require('../models/artifact');
// List of all Costumes
exports.artifact_list =  async function(req, res) {
    try {
        // Fetch all potions from the database
        const allArtifacts = await Artifact.find();  
 
        // Send the list of potions as a JSON response
        res.json(allArtifacts);  
    } catch (err) {
        // If an error occurs, return status 500 with the error message
        res.status(500).send(`{"error": ${err}}`);  
    }
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