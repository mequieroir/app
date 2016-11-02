var express = require('express');
var router = express.Router();
var user = require('../models/user');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
