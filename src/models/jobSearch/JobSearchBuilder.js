"use strict";

var JobSearch = require('./JobSearch');


function JobSearchBuilder() {
}

JobSearchBuilder.prototype.createJobSearch = function(data) {
	var jobSearch = new JobSearch();

	data.jobSearchId = 0;
	jobSearch.setUserId(data.userId);
	jobSearch.setTitle(data.title || "");
	jobSearch.setCreationDate(data.creationDate || "");
	jobSearch.setDescription(data.description || "");
	jobSearch.setSkills(data.skills || []);
	jobSearch.setRequirements(data.requirements || []);
	jobSearch.setGrossSalary(data.grossSalary || 0);
	jobSearch.setJobType(data.jobType || "F");

	return jobSearch;
};

module.exports = JobSearchBuilder;

