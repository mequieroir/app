"use strict";

var JobOffer = require('./JobOffer');
var JobOfferValidator = require('./JobOfferValidator');
var JobOfferBuilder = require('./JobOfferBuilder')
var DataAccess = require('../../repository/DataAccess');

function JobOfferService() {
}

JobOfferService.prototype.getJobOffers() {
	var data = this.dataAccess.getData("jobOffers");
	return data;
}

JobOfferService.prototype.getJobOffer = function(jobOfferId) {
	return new Promise(
		function(resolve, reject) {   
			var path = "jobOffer/" + jobOfferId;
			console.log('path',path);
			var dataAccess = new DataAccess();
			dataAccess.getData(path).then(
			    function(val) {
			    	console.log('val',val);
			    	if (val == null){
						reject(val);
					}
					resolve(val)
				}
			);
	
	});
};

JobOfferService.prototype.createJobOffer(data) {
	return new Promise(
		function(resolve, reject) {   
			var jobOfferValidator = new JobOfferValidator();
			jobOfferValidator.checkJobOfferExists(data).then(
				function(val) {
					if (val != null){
						reject(val);
					}
					var jobOfferBuilder = new JobOfferBuilder();
					var dataAccess = new DataAccess();	
					var jobOffer = jobOfferBuilder.createJobOffer(data);
					var jobOfferId = dataAccess.pushData("jobOffer",jobOffer);
					jobOffer.setjobOfferId(jobOfferId);
					dataAccess.setData("jobOffer/" + jobOfferId, jobOffer);
					//dataAccess.setData("jobOffersList/" + user.getUserName(),user.getUserName());
					resolve(jobOffer);
					
				}
			);
		}
	);
}

JobOfferService.prototype.updateJobOffer = function(data) {
	var status = {};
	return status;
};

module.exports = JobOfferService;