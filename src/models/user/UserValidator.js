	"use strict";

var DataAccess = require('../../repository/DataAccess');

function UserValidator() {
	
}

UserValidator.prototype.checkUserExist = function(data) {
	console.log('checkUserExist');
	return new Promise(
		function(resolve, reject) {   
			var path = "usersList/" + data.userName;
			// console.log('checkUserExist ',path);
			var dataAccess = new DataAccess();
	
			dataAccess.getData(path).then(
			    function(val) {
			    	var result = val != null; 
		    		resolve(result)
				}
			);
	
	});
};

module.exports = UserValidator;

