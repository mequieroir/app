"use strict";

var DataAccess = require('../../repository/DataAccess');

function JobSearchValidator() {
	
}

JobSearchValidator.prototype.checkFields = function(data) {
	if (!data.userId) return false;
	if (!data.title) return false;

	return true;
};

module.exports = JobSearchValidator;

