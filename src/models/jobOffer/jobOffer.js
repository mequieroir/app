"use strict";

var jobTypes = ["F", "P", "T"]

function JobOffer() {
	this.jobOfferId = 0;
	this.title = "";
	this.creationDate = new Date();
	this.description = "";
	this.required = [];
	this.desired = [];
	this.grossSalary = 0;
	this.benefits = [];
	this.jobType = "F";
}

JobOffer.prototype.getJobOfferId = function() {
	return this.jobOfferId;
}

JobOffer.prototype.getTitle = function() {
	return this.title;
}

JobOffer.prototype.getCreationDate = function() {
	return this.creationDate;
}

JobOffer.prototype.getDescription = function() {
	return this.description;
}

JobOffer.prototype.getRequired = function() {
	return this.required;
}

JobOffer.prototype.getDesired = function() {
	return this.desired;
}

JobOffer.prototype.getGrossSalary = function() {
	return this.grossSalary;
}

JobOffer.prototype.getBenefits = function() {
	return this.benefits;
}

JobOffer.prototype.getJobType = function() {
	return this.jobType;
}

JobOffer.prototype.setJobOfferId = function(jobOfferId) {
	this.jobOfferId = jobOfferId;
}

JobOffer.prototype.setTitle = function(title) {
	this.title = title;
}

JobOffer.prototype.setCreationDate = function(creationDate) {
	this.creationDate = creationDate;
}

JobOffer.prototype.setDescription = function(description) {
	this.description = description;
}

JobOffer.prototype.setRequired = function(required) {
	if (required.constructor === Array) {
		this.required = required;
	}
}

JobOffer.prototype.setDesired = function(desired) {
	if (required.desired === Array) {
		this.desired = desired;
	}
}

JobOffer.prototype.setGrossSalary = function(grossSalary) {
	this.grossSalary = grossSalary;
}

JobOffer.prototype.setBenefits = function(benefits) {
	if (required.benefits === Array) {
		this.benefits = benefits;
	}
}

JobOffer.prototype.setJobType = function(jobType) {
	if (indexOf(jobType, jobTypes) >= 0) {
		this.jobType = jobType;
	}
}

module.exports = JobOffer;