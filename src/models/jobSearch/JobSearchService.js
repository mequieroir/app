"use strict";

var JobSearch = require('./JobSearch');
var JobSearchValidator = require('./JobSearchValidator');
var JobSearchBuilder = require('./JobSearchBuilder')
var DataAccess = require('../../repository/DataAccess');

function JobSearchService() {
}

JobSearchService.prototype.getJobSearchs = function() {
	return new Promise(
		function(resolve, reject) {   
			var dataAccess = new DataAccess();
			dataAccess.getData("jobSearch").then(
			    function(val) {
			    	if (val == null){
						reject(val);
					}
					resolve(val)
				}
			);
	});
}

JobSearchService.prototype.getJobSearch = function(id) {
	return new Promise(
		function(resolve, reject) {   
			var path = "jobSearch/" + id;
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
			jobSearchValidator.checkIfPerson(data).then(function(val) {
				var dataAccess = new DataAccess();
				dataAccess.getRowCount("jobSearch/").then(function(count) {
					var jobSearchBuilder = new JobSearchBuilder();
					var id = count + 1;
					var jobSearch = jobSearchBuilder.createJobSearch(data);
					jobSearch.setId(jobSearch.title + "-" + id);
					var jobSearchId = dataAccess.pushData("jobSearch",jobSearch);
					jobSearch.setJobSearchId(jobSearchId);
					dataAccess.setData("jobSearch/" + jobSearchId, jobSearch);
					resolve(jobSearch);
				}, function(val) {
					reject(val);
				});
			}, function(val) {
				console.log(3)
				reject(val);
			});	
		}
	);
}

JobSearchService.prototype.updateJobSearch = function(jobSearchId, data) {
	console.log(data)
	return new Promise(function(resolve, reject) {
		var jobSearchValidator = new JobSearchValidator();
		if (!jobSearchValidator.checkFields(data)) {
			console.log("update jobSearch: invalid fields");
			reject();
			return;
		}
		var jobSearchService = new JobSearchService();
		jobSearchService.getJobSearch(jobSearchId).then(function(jobSearch) {
			var dataAccess = new DataAccess();
			var path = "jobSearch";
			dataAccess.updateData(path, jobSearchId, data).then(
				function(val) {
					console.log(val)
					resolve(jobSearch);
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

module.exports = JobSearchService;