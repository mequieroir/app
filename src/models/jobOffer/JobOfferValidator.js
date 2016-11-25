"use strict";

var DataAccess = require('../../repository/DataAccess');

function JobOfferValidator() {
	
}

JobOfferValidator.checkFields = function(jobOffer) {
	if (jobOffer.expirationDate == NULL) return false;
	if (jobOffer.title == NULL) return false;
	return true;
}

module.exports = JobOfferValidator;

