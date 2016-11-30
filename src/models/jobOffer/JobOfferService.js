"use strict";

var JobOffer = require('./JobOffer');
var JobOfferValidator = require('./JobOfferValidator');
var JobOfferBuilder = require('./JobOfferBuilder')
var DataAccess = require('../../repository/DataAccess');

function JobOfferService() {
}

JobOfferService.prototype.getJobOffers = function() {
	return new Promise(
		function(resolve, reject) {   
			var dataAccess = new DataAccess();
			dataAccess.getData("jobOffer").then(
			    function(val) {
			    	if (val == null){
						reject(val);
					}
					resolve(val)
				}
			);
	});
}

JobOfferService.prototype.getJobOffer = function(id) {
	return new Promise(
		function(resolve, reject) {   
			var path = "jobOffer/";
			console.log('path',path);
			var dataAccess = new DataAccess();
			// dataAccess.getData(path).then(
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

JobOfferService.prototype.updateJobOffer = function(jobOfferId, data) {
	return new Promise(function(resolve, reject) {
		var jobOfferValidator = new JobOfferValidator();
		if (!jobOfferValidator.checkFields(data)) {
			console.log("update jobOffer: invalid fields");
			reject();
			return;
		}
		var jobOfferService = new JobOfferService();
		jobOfferService.getJobOffer(jobOfferId).then(function(jobOffer) {
			var dataAccess = new DataAccess();
			var path = "jobOffer";
			dataAccess.updateData(path, jobOfferId, data).then(
				function(val) {
					console.log(val)
					resolve(jobOffer);
				},
				function(val) {
					reject("couldNotUpdate")
				}
			);
		}, function() {
			reject();
			return;
		});
	});
};

module.exports = JobOfferService;