"use strict";

var User = require('./User');
var Person = require('./Person');
var Company = require('./Company');


function UserBuilder() {
}

UserBuilder.prototype.makePerson = function(data) {
	var userName = data.userName;
	var firstName = data.firstName;
	var lastName = data.lastName;
	var age = data.age;
	var email = data.email;
	var telephone = data.telephone;
	var address = data.address;

	var person = new Person(userName, firstName, lastName, age, email,  telephone, address)
	return person;
};

UserBuilder.prototype.makeCompany = function(data) {
	var userName = data.userName; 
	var companyName = data.companyName; 
	var email = data.email; 
	var telephone = data.telephone; 
	var address = data.address;
	var company = new Company(userName, companyName, email,  telephone, address)
	return company;
};

module.exports = UserBuilder;

