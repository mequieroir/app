	"use strict";

var DataAccess = require('../../repository/DataAccess');

function UserValidator() {
	
}

UserValidator.prototype.checkUserExist = function(data) {
	return new Promise(
		function(resolve, reject) {   
			var path = "usersList/" + data.userName;
			console.log('checkUserExist ',path);
			var dataAccess = new DataAccess();
			dataAccess.getData(path).then(
			    function(val) {
			    	console.log('checkUserExist ',val);
					resolve(val)
				}
			);
	
	});
};

module.exports = UserValidator;

