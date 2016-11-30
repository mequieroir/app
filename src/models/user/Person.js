"use strict";

var User = require('./User');

Person.prototype = new User();

function Person(userName, firstName, lastName, age, email,  telephone, address) {
	this.userName = userName || ''; 
	this.telephone = telephone || '';
	this.address = address || '';
	this.firstName = firstName || ''; 
	this.lastName = lastName || ''; 
	this.age = age || '';
	this.email = email || '';
	this.type = 'person';
	this.jobSearch = [];
	this.skills = {};
}


Person.prototype.getData = function() {
	var data = {
		telephone: this.telephone,
		address: this.address,
		userId: this.userId,
		userName: this.userName,
		telephone: this.telephone,
		address: this.address,
		firstName: this.firstName,
		lastName: this.lastName,
		age: this.age,
		email: this.email,
		type: this.type,
		skills: this.skills
	}
	return data;
};

Person.prototype.getFirstName = function() {
	return this.firstName;
};

Person.prototype.getLastName = function() {
	return this.lastName;
};

Person.prototype.getAge = function() {
	return this.age;
};

Person.prototype.getJobSearch = function() {
	return this.jobSearch;
};

Person.prototype.setFirstName = function(firstName) {
	this.firstName = firstName;
};

Person.prototype.setLastName = function(lastName) {
	this.lastName = lastName;
};

Person.prototype.setAge = function(age) {
	this.age = age;
};

Person.prototype.setJobSearch = function(jobSearch) {
	this.jobSearch = jobSearch;
};

Person.prototype.setJobOffer = function(jobOffert) {
	this.jobSearch = jobSearch;
};


Person.prototype.setSkill = function(skill) {
	this.skills[skill.name] = skill.description
};

module.exports = Person;

