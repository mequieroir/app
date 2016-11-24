"use strict";

var JobSearch = require('./JobSearch');


function JobSearchBuilder() {
}

JobSearchBuilder.prototype.makeJobSearch = function(data) {
	var jobSearch = new JobSearch();

	data.jobSearchId = 0;
	jobOffer.setTitle(data.title || "");
	jobOffer.setCreationDate(data.creationDate || "");
	jobOffer.setDescription(data.description || "");
	jobOffer.setSkills(data.skills || []);
	jobOffer.setRequirements(data.requirements || []);
	jobOffer.setGrossSalary(data.grossSalary || 0);
	jobOffer.setJobType(data.jobType || "F");

	return jobSearch;
};

module.exports = JobSearchBuilder;

