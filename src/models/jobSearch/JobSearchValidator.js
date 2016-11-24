"use strict";

var DataAccess = require('../../repository/DataAccess');

function JobSearchValidator() {
	
}

JobSearchValidator.prototype.checkJobSearchExists = function(data) {
	return new Promise(
		function(resolve, reject) {   
			var path = "JobSearchList/" + data.JobSearchId;
			console.log('checkJobSearchExists ',path);
			var dataAccess = new DataAccess();
			dataAccess.getData(path).then(
			    function(val) {
			    	console.log('checkJobSearchExists ',val);
					resolve(val);
				}
			);
	
	});
};

module.exports = JobSearchValidator;

