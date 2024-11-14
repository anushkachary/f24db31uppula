var Artifact = require('../models/artifact');
// List of all artifacts
exports.artifact_list =  async function(req, res) {
    try {
        // Fetch all artifacts from the database
        const allArtifacts = await Artifact.find();  
 
        res.render('artifacts', { title: 'Artifact Search Results', results: allArtifacts });
    } catch (err) {
        // If an error occurs, return status 500 with the error message
        res.status(500).send(`{"error": ${err}}`);  
    }
};
// for a specific artifacts.
exports.artifact_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Artifact detail: ' + req.params.id);
};
// Handle artifacts create on POST.
exports.artifact_create_post = async function(req, res) {
    console.log(req.body); 

    let newArtifact = new Artifact({
        artifactName: req.body.artifactName,  
        originYear: req.body.originYear,          
        culture: req.body.culture
    });

    try {
        const result = await newArtifact.save();
        res.status(201).json(result); 
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};
// Handle artifacts delete from on DELETE.
exports.artifact_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Artifact delete DELETE ' + req.params.id);
};
// Handle artifacts update form on PUT.
exports.artifact_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Artifact update PUT' + req.params.id);
};