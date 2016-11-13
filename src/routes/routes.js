var express = require('express');
var router = express.Router();
var UserService = require('../models/user/UserService');

var userService = new UserService();

/* GET users listing. */
router.get('/users', function(req, res, next) {
	var response = {
		status: 500,
		data: null
	}  
	var data = userService.getUsers();	

	if(data != null) {
		response.status = 200;
		response.data = data;
	}
	res.status(response.status);
	res.json(response.data);
});

/*POST user*/
router.post('/users', function(req, res) {
	var response = {
		status: 500,
		data: null
	} 
	var data = req.body;
	if(userService.createUser(data)) {
		response.status = 200;
		response.data = data;
	}	
	res.status(response.status);
	res.json(response.data);
});

module.exports = router;
