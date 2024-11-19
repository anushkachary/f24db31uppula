var Artifact = require('../models/artifact');

exports.artifact_view_one_Page = async function (req, res) {
    console.log('Single view for id ' + req.query.id);
    try {
      const result = await Artifact.findById(req.query.id);
      res.render('artifactdetail', {
        title: 'Artifact Detail',
        toShow: result,
      });
    } catch (err) {
      res.status(500);
      res.send(`{'error': '${err}'}`);
    }
  };
  
  exports.artifact_create_Page = function (req, res) {
    console.log("Create view");
    try {
      res.render('artifactcreate', { title: 'Create Artifact' });
    } catch (err) {
      res.status(500);
      res.send(`{'error': '${err}'}`);
    }
  };
  
exports.artifact_update_Page = async function(req, res) {
    console.log("Update view for item " + req.query.id);
    try {
      let result = await Artifact.findById(req.query.id);
      res.render('artifactupdate', { title: 'Artifact Update', toShow: result });
    } catch (err) {
      res.status(500);
      res.send(`{'error': '${err}'}`);
    }
  };
  