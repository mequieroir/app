var express = require('express');
var router = express.Router();

var UserService = require('../models/user/UserService');
var userService = new UserService();

var JobOfferService = require('../models/jobOffer/JobOfferService');
var jobOfferService = new JobOfferService();


var response = {
		status: 500,
		data: null
	} 

/* GET users listing. */
router.get('/user', function(req, res) {
	  
	var data = userService.getUsers().then(
		function(val){
			response.status = 200;
			response.data = val;
			res.status(response.status);
			res.json(response.data);
		}
	);	
	
});

/* GET user. */
router.get('/user/:id', function(req, res) {
    var id = req.params.id;
    console.log('userId',id);
    var data = userService.getUser(id).then(
		function(val){
			response.status = 200;
			response.data = val;
			res.status(response.status);
			res.json(response.data);
		},
		function(err){
			console.log('reject');
			response.status = 404;
			res.status(response.status);
			res.json(response.data);
		}
	);	
});

/*POST user*/
router.post('/user', function(req, res) {
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

/* GET jobOffers listing. */
router.get('/jobOffer', function(req, res) {
	  
	var data = jobOfferService.getJobOffers().then(
		function(val){
			response.status = 200;
			response.data = val;
			res.status(response.status);
			res.json(response.data);
		}
	);	
	
});

/* GET jobOffer. */
router.get('/jobOffer/:id', function(req, res) {
    var id = req.params.id;
    console.log('jobOfferId',id);
    var data = jobOfferService.getJobOffer(id).then(
		function(val){
			response.status = 200;
			response.data = val;
			res.status(response.status);
			res.json(response.data);
		},
		function(err){
			console.log('reject');
			response.status = 404;
			res.status(response.status);
			res.json(response.data);
		}
	);	
});

/*POST jobOffer*/
router.post('/jobOffer', function(req, res) {
	var data = req.body;
	jobOfferService.createJobOffer(data).then(
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
