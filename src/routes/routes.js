var express = require('express');
var router = express.Router();

var UserService = require('../models/user/UserService');
var userService = new UserService();


var response = {
		status: 500,
		data: null
	} 

/* GET users listing. */
router.get('/users', function(req, res, next) {
	  
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
	var data = req.body;
	userService.createUser(data).then(
		function(val){
			console.log('response');
			response.status = 200;
			response.data = val;
			res.status(response.status);
			res.json(response.data);
		},
		function(err){
			console.log('reject');
			response.status = 409;
			res.status(response.status);
			res.json(response.data);
		}

	);
 	
});

module.exports = router;
