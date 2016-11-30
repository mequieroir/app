"use strict";

var DataAccess = require('../../repository/DataAccess');
var UserService = require('../user/UserService');

function JobSearchValidator() {
	
}

JobSearchValidator.prototype.checkFields = function(data) {
	if (!data.userId) return false;
	if (!data.title) return false;

	return true;
};

JobSearchValidator.prototype.checkIfPerson = function(jobSearch) {
	return new Promise(function(resolve, reject) {
		var userService = new UserService();
		userService.getUser(jobSearch.userId).then(function(val) {
			if (val.type == "person") {
				resolve(true);
				return;
			}
			reject(false);
		}, function(val) {
			reject(false);
		});	
	})
}

module.exports = JobSearchValidator;

