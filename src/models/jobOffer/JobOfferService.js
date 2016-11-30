"use strict";

var JobOffer = require('./JobOffer');
var JobOfferValidator = require('./JobOfferValidator');
var JobOfferBuilder = require('./JobOfferBuilder')
var DataAccess = require('../../repository/DataAccess');

function JobOfferService() {
}

JobOfferService.prototype.getJobOffers = function() {
	var data = this.dataAccess.getData("jobOffer/");
	return data;
}

JobOfferService.prototype.getJobOffer = function(id) {
	return new Promise(
		function(resolve, reject) {   
			var path = "jobOffer/";
			console.log('path',path);
			var dataAccess = new DataAccess();
			// dataAccess.getData(path).then(
			dataAccess.getDataFiltered(path, "id", id).then(
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

JobOfferService.prototype.createJobOffer = function(data) {
	return new Promise(
		function(resolve, reject) {   
			var jobOfferValidator = new JobOfferValidator();
			console.log(jobOfferValidator)
			if (!jobOfferValidator.checkFields(data)) {
				reject(data);
				return;
			}
			jobOfferValidator.checkIfCompany(data).then(function(val) {
				var dataAccess = new DataAccess();	
				dataAccess.getRowCount("jobOffer/").then(function(count) {
					var jobOfferBuilder = new JobOfferBuilder();
					var id = count + 1;
					var jobOffer = jobOfferBuilder.createJobOffer(data);
					jobOffer.setId(jobOffer.title + "-" + id);
					var jobOfferId = dataAccess.pushData("jobOffer",jobOffer);
					jobOffer.setJobOfferId(jobOfferId);
					dataAccess.setData("jobOffer/" + jobOfferId, jobOffer);
					resolve(jobOffer);
				}, function(val) {
					reject(val);
				});
			}, function(val) {
				reject(val);
			});
			
		}
	);
}

JobOfferService.prototype.updateJobOffer = function(data) {
	var status = {};
	return status;
};

module.exports = JobOfferService;