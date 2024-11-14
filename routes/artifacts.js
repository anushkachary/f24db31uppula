// routes/potion.js
var express = require('express');
var router = express.Router();
 
/* GET potion page. */
router.get('/', function(req, res, next) {
  res.render('artifact', { title: 'Search Results for Artifacts' });
});
 
module.exports = router;