var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Madan Mohan Reddy Pulichintha' });
});

module.exports = router;
