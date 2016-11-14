"use strict";

var DataAccess = require('../../repository/DataAccess');

function UserValidator() {
	
}

UserValidator.prototype.checkUserExist = function(data) {
	return new Promise(
		function(resolve, reject) {   
			var path = "usersList/" + data.userName;
			var dataAccess = new DataAccess();
			dataAccess.getData(path).then(
			    function(val) {
					resolve(val)
				}
			);
	
	});
};

module.exports = UserValidator;

