var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/bee', function(req, res, next) {
  res.send('howdy');
});

module.exports = router;
