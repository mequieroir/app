"use strict";

var DataAccess = require('../../repository/DataAccess');
var UserService = require('../user/UserService');

function JobOfferValidator() {
	
}

JobOfferValidator.prototype.checkFields = function(jobOffer) {
	if (!jobOffer.companyId) return false;
	if (!jobOffer.expirationDate) return false;
	if (!jobOffer.title) return false;
	return true;
}

JobOfferValidator.prototype.checkIfCompany = function(jobOffer) {
	return new Promise(function(resolve, reject) {
		var userService = new UserService();
		userService.getUser(jobOffer.companyId).then(function(val) {
			if (val.type == "company") {
				resolve(true);
				return;
			}
			reject(false);
		});	
	})
}

module.exports = JobOfferValidator;

