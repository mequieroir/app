"use strict";

var JobOffer = require('./JobOffer');


function JobOfferBuilder() {
}

JobOfferBuilder.prototype.makeJobOffer = function(data) {
	var jobOffer = new JobOffer();

	data.jobOfferId = 0;
	jobOffer.setTitle(data.title || "");
	jobOffer.setCreationDate(data.creationDate || "");
	jobOffer.setDescription(data.description || "");
	jobOffer.setRequired(data.required || []);
	jobOffer.setDesired(data.desired || []);
	jobOffer.setGrossSalary(data.grossSalary || 0);
	jobOffer.setBenefits(data.benefits || []);
	jobOffer.setJobType(data.jobType || "F");

	return jobOffer;
};

module.exports = JobOfferBuilder;

