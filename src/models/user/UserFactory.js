"use strict";

var User = require('./User');
var Person = require('./Person');
var Company = require('./Company');
var UserBuilder = require('./UserBuilder');


function UserFactory() {
	this.userBuilder = new UserBuilder();
}

UserFactory.prototype.createUser = function(data) {
	var user = null;
	var type = data.type;
	if (type == "person") {
		user = this.userBuilder.makePerson(data);
	} else if (type == "company") {
		user = this.userBuilder.makeCompany(data);
	} else {
		user = null;
	}
	return user;
};

module.exports = UserFactory;

