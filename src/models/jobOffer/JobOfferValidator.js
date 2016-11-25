"use strict";

var DataAccess = require('../../repository/DataAccess');

function JobOfferValidator() {
	
}

JobOfferValidator.prototype.checkFields = function(jobOffer) {
	console.log(1)
	if (!jobOffer.expirationDate) return false;
	console.log(1)
	if (!jobOffer.title) return false;
	console.log(1)
	return true;
}

module.exports = JobOfferValidator;

