"use strict";

var JobSearch = require('./JobSearch');
var JobSearchValidator = require('./JobSearchValidator');
var JobSearchBuilder = require('./JobSearchBuilder')
var DataAccess = require('../../repository/DataAccess');

function JobSearchService() {
}

JobSearchService.prototype.getJobSearchs() {
	var data = this.dataAccess.getData("jobSearchs");
	return data;
}

JobSearchService.prototype.getJobSearch = function(jobSearchId) {
	return new Promise(
		function(resolve, reject) {   
			var path = "jobSearch/" + jobSearchId;
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

JobSearchService.prototype.createJobSearch(data) {
	return new Promise(
		function(resolve, reject) {   
			var jobSearchValidator = new JobSearchValidator();
			jobSearchValidator.checkJobSearchExists(data).then(
				function(val) {
					if (val != null){
						reject(val);
					}
					var jobSearchBuilder = new JobSearchBuilder();
					var dataAccess = new DataAccess();	
					var jobOffer = jobSearchBuilder.createJobSearch(data);
					var jobOfferId = dataAccess.pushData("jobOffer",jobOffer);
					jobOffer.setjobSearchId(jobSearchId);
					dataAccess.setData("jobSearch/" + jobSearchId, jobOffer);
					//dataAccess.setData("jobOffersList/" + user.getUserName(),user.getUserName());
					resolve(jobOffer);
					
				}
			);
		}
	);
}

JobSearchService.prototype.updateJobSearch = function(data) {
	var status = {};
	return status;
};

module.exports = JobSearchService;