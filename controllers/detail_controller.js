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
  