	"use strict";

var DataAccess = require('../../repository/DataAccess');

function UserValidator() {
	this.personType = "person"
}


function checkUserPersonFields(data) {
	console.log('checkUserPersonFields');
	return (data.userName != '' && data.userName != null && data.userName.length >= 5 &&
		data.telephone != '' && data.telephone != null && data.telephone.length >= 5 &&
		data.address != '' && data.address != null && data.address.length >= 5 &&
		data.firstName != '' && data.firstName != null && data.firstName.length >= 5 &&
		data.lastName != '' && data.lastName != null && data.lastName.length >= 5 &&
		data.email != '' && data.email != null && data.email.length >= 10 &&
		data.age >= 5 );
}

function checkUserCompanyFields(data) {
	console.log('checkUserCompanyFields');
	return (data.userName != '' && data.userName != null && data.userName.length >= 5 &&
			data.telephone != '' && data.telephone != null && data.telephone.length >= 5 &&
			data.address != '' && data.address != null && data.address.length >= 5 &&
			data.companyName != '' && data.companyName != null && data.companyName.length >= 5 &&
			data.email != '' && data.email != null && data.email.length >= 5);
}

UserValidator.prototype.isValidFields = function(data) {
	if (!data || !data.type) return false;
	return (data.type == this.personType ? checkUserPersonFields(data) : checkUserCompanyFields(data))
}

UserValidator.prototype.checkUserExist = function(data) {
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

