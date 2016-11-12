"use strict";

var User = require('User');

Company.prototype = new User();

function Company(userName, companyName, email,  telephone, address) {
	this.userId = userId || ''; 
	this.userName = userName || ''; 
	this.telephone = telephone || '';
	this.address = address || '';
	this.companyName = companyName || ''; 
}

Company.prototype.getCompanyName = function() {
	return this.companyName;
};

Company.prototype.setCompanyName = function(companyName) {
	this.companyName = companyName;
};

module.exports = Company;

