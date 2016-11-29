"use strict";

var DataAccess = require('../../repository/DataAccess');

function JobOfferValidator() {
	
}

JobOfferValidator.prototype.checkFields = function(jobOffer) {
	if (!jobOffer.companyId) return false;
	if (!jobOffer.expirationDate) return false;
	if (!jobOffer.title) return false;
	return true;
}

module.exports = JobOfferValidator;

