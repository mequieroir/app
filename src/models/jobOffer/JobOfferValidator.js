"use strict";

var DataAccess = require('../../repository/DataAccess');

function JobOfferValidator() {
	
}

JobOfferValidator.prototype.checkJobOfferExists = function(data) {
	return new Promise(
		function(resolve, reject) {   
			var path = "JobOfferList/" + data.JobOfferId;
			console.log('checkJobOfferExists ',path);
			var dataAccess = new DataAccess();
			dataAccess.getData(path).then(
			    function(val) {
			    	console.log('checkJobOfferExists ',val);
					resolve(val);
				}
			);
	
	});
};

module.exports = JobOfferValidator;

