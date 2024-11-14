var Artifact = require('../models/artifact');

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

exports.artifact_detail = async function(req, res) {
    console.log("detail: " + req.params.id);
    try {
        const result = await Artifact.findById(req.params.id);
        if (!result) {
            return res.status(404).send({ error: `Document for id ${req.params.id} not found` });
        }
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: `Error retrieving document for id ${req.params.id}` });
    }
   };
   
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

exports.artifact_update_put = async function(req, res) {
    console.log(`Update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Artifact.findById(req.params.id);
        
        if (!toUpdate) {
            return res.status(404).send(`{"error": "Artifact with id ${req.params.id} not found"}`);
        }

        // Do updates of properties
        toUpdate.artifactName = req.body.artifactName;
        toUpdate.originYear = req.body.originYear;
        toUpdate.culture = req.body.culture;

        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    } catch (err) {
        res.status(500).send(`{"error": "Update for id ${req.params.id} failed due to error: ${err}"}`);
    }
};

exports.artifact_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Artifact delete DELETE ' + req.params.id);
   };