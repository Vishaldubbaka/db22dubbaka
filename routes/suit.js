var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('suit', { title: 'Search Results suit' });
});

module.exports = router;
