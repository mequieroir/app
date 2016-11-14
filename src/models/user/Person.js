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
	this.jobSearch = [];
}

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

module.exports = Person;

