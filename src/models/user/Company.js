"use strict";

var User = require('./User');

Company.prototype = new User();

function Company(userName, companyName, email,  telephone, address) {
	this.userName = userName || ''; 
	this.telephone = telephone || '';
	this.address = address || '';
	this.companyName = companyName || ''; 
	this.email = email || ''; 
	this.type = 'company';
	this.jobOffer = [];
}

Company.prototype.getData = function() {
	var data = {
		telephone: this.telephone,
		address: this.address,
		userId: this.userId,
		userName: this.userName,
		companyName: this.companyName,
		email: this.email,
		type: this.type
	}
	return data;
};


Company.prototype.getCompanyName = function() {
	return this.companyName;
};

Company.prototype.getJobOffer = function() {
	return this.jobOffer;
};

Company.prototype.setCompanyName = function(companyName) {
	this.companyName = companyName;
};

Company.prototype.setJobOffer = function(jobOffer) {
	this.jobOffer = jobOffer;
};

module.exports = Company;

