"use strict";

function Curriculum() {
	this.userId = 0;
	this.lang = "es";
	this.creationDate = new Date();
	this.experience = [];
	this.skills = [];
	this.education = [];
	this.honours = [];
	this.interests = [];
}

JobSearch.prototype.getUserId = function() {
	return this.userId;
}

JobSearch.prototype.getLang = function() {
	return this.lang;
}

JobSearch.prototype.getCreationDate = function() {
	return this.creationDate;
}

JobSearch.prototype.getExperience = function() {
	return this.experience;
}

JobSearch.prototype.getSkills = function() {
	return this.skills;
}

JobSearch.prototype.getEducation = function() {
	return this.education;
}

JobSearch.prototype.getHonours = function() {
	return this.honours;
}

JobSearch.prototype.getInterests = function() {
	return this.interests;
}

JobSearch.prototype.setUserId = function(userId) {
	this.userId = userId;
}

JobSearch.prototype.setLang = function(lang) {
	this.lang = lang;
}

JobSearch.prototype.setCreationDate = function(creationDate) {
	this.creationDate = creationDate;
}

JobSearch.prototype.setSkills = function(description) {
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