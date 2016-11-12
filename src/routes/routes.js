var express = require('express');
var router = express.Router();
var UserService = require('../models/user/UserService');

var userService = new UserService();



/* GET users listing. */
router.get('/users', function(req, res, next) {
	var response = userService.getUsers();	
	// res.status(err.status || 500);
	res.json(response);   
});

module.exports = router;
