"use strict";

var User = require('./User');
var UserFactory = require('./UserFactory');
var UserValidator = require('./UserValidator');
var DataAccess = require('../../repository/DataAccess');


function UserService() {
}

UserService.prototype.getUsers = function() {
	return new Promise(
		function(resolve, reject) {   
			var dataAccess = new DataAccess();
			dataAccess.getData("users").then(
			    function(val) {
			    	if (val == null){
						reject(val);
					}
					resolve(val)
				}
			);
	
	});

};

UserService.prototype.getUser = function(userId) {
	return new Promise(
		function(resolve, reject) {   
			var path = "users/" + userId;
			console.log('path',path);
			var dataAccess = new DataAccess();
			dataAccess.getData(path).then(
			    function(val) {
			    	console.log('val',val);
			    	if (val == null){
						reject(val);
					}
					resolve(val)
				}
			);
	
	});
};

UserService.prototype.createUser = function(data) {
	return new Promise(
		function(resolve, reject) {   
			var userValidator = new UserValidator();
			userValidator.checkUserExist(data).then(
				function(val) {
					if (val != null){
						reject(val);
					}
					var userFactory = new UserFactory();
					var dataAccess = new DataAccess();	
					var user = userFactory.createUser(data);
					var userId = dataAccess.pushData("users",user);
					user.setUserId(userId);
					dataAccess.setData("users/"+userId,user);
					dataAccess.setData("usersList/"+user.getUserName(),user.getUserName());
					resolve(user);
					
				}
			);
		}
	);

};

UserService.prototype.updateUser = function(data) {
	var status = {};
	return status;
};

module.exports = UserService;
