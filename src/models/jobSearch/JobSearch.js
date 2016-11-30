"use strict";

var jobTypes = ["F", "P", "T"]

function JobSearch() {
	this.id = "";
	this.userId = "";
	this.jobSearchId = 0;
	this.title = "";
	this.creationDate = new Date();
	this.description = "";
	this.skills = [];
	this.requirements = [];
	this.grossSalary = 0;
	this.jobType = "F";
	this.active = true;
}

JobSearch.prototype.getId = function() {
	return this.id;
}

JobSearch.prototype.getUserId = function() {
	return this.userId;
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

JobSearch.prototype.getActice = function() {
	return this.active;
}

JobSearch.prototype.setId = function(id) {
	this.id = id;
}

JobSearch.prototype.setUserId = function(userId) {
	this.userId = userId;
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
	if (requirements.constructor === Array) {
		this.requirements = requirements;
	}
}

JobSearch.prototype.setGrossSalary = function(grossSalary) {
	this.grossSalary = grossSalary;
}

JobSearch.prototype.setJobType = function(jobType) {
	if (jobTypes.indexOf(jobType) >= 0) {
		this.jobType = jobType;
	}
}

JobSearch.prototype.setActive = function(active) {
	this.active = active;
}

module.exports = JobSearch;