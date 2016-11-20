var express = require('express');
var router = express.Router();

var JobOfferService = require('../models/jobOffer/JobOfferService');
var jobOfferService = new JobOfferService();


var response = {
		status: 500,
		data: null
	} 

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

module.exports = JobOfferRouter;
