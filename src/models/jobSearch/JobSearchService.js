"use strict";

var JobSearch = require('./JobSearch');
var JobSearchValidator = require('./JobSearchValidator');
var JobSearchBuilder = require('./JobSearchBuilder')
var DataAccess = require('../../repository/DataAccess');

function JobSearchService() {
}

JobSearchService.prototype.getJobSearchs = function() {
	var data = this.dataAccess.getData("jobSearchs");
	console.log("iamhere getjobsearch")
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

JobSearchService.prototype.createJobSearch = function(data) {
	return new Promise(
		function(resolve, reject) {   
			var jobSearchValidator = new JobSearchValidator();
			if (!jobSearchValidator.checkFields(data)) {
				reject(null);
				return;
			}
			var jobSearchBuilder = new JobSearchBuilder();
			var dataAccess = new DataAccess();	
			var jobSearch = jobSearchBuilder.createJobSearch(data);
			var jobSearchId = dataAccess.pushData("jobSearch",jobSearch);
			jobSearch.setJobSearchId(jobSearchId);
			dataAccess.setData("jobSearch/" + jobSearchId, jobSearch);
			//dataAccess.setData("jobOffersList/" + user.getUserName(),user.getUserName());
			resolve(jobSearch);
		}
	);
}

JobSearchService.prototype.updateJobSearch = function(data) {
	var status = {};
	return status;
};

module.exports = JobSearchService;