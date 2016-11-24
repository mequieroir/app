"use strict";

var jobTypes = ["F", "P", "T"]

function JobSearch() {
	this.jobSearchId = 0;
	this.title = "";
	this.creationDate = new Date();
	this.description = "";
	this.skills = [];
	this.requirements = [];
	this.grossSalary = 0;
	this.jobType = "F";
}

JobSearch.prototype.getJobSearchId = function() {
	return this.jobSearchId;
}

JobSearch.prototype.getTitle = function() {
	return this.title;
}

JobSearch.prototype.getCreationDate = function() {
	return this.creationDate;
}

JobSearch.prototype.getDescription = function() {
	return this.description;
}

JobSearch.prototype.getSkills = function() {
	return this.skills;
}

JobSearch.prototype.getRequirements = function() {
	return this.requirements;
}

JobSearch.prototype.getGrossSalary = function() {
	return this.grossSalary;
}

JobSearch.prototype.getJobType = function() {
	return this.jobType;
}

JobSearch.prototype.setJobSearchId = function(jobSearchId) {
	this.jobSearchId = jobSearchId;
}

JobSearch.prototype.setTitle = function(title) {
	this.title = title;
}

JobSearch.prototype.setCreationDate = function(creationDate) {
	this.creationDate = creationDate;
}

JobSearch.prototype.setDescription = function(description) {
	this.description = description;
}

JobSearch.prototype.setSkills = function(skills) {
	if (skills.constructor === Array) {
		this.skills = skills;
	}
}

JobSearch.prototype.setRequirements = function(requirements) {
	if (required.requirements === Array) {
		this.requirements = requirements;
	}
}

JobSearch.prototype.setGrossSalary = function(grossSalary) {
	this.grossSalary = grossSalary;
}


JobSearch.prototype.setJobType = function(jobType) {
	if (indexOf(jobType, jobTypes) >= 0) {
		this.jobType = jobType;
	}
}

module.exports = JobSearch;