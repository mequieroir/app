"use strict";

var User = require('./User');
var UserFactory = require('./UserFactory');
var UserValidator = require('./UserValidator');
var DataAccess = require('../../repository/DataAccess');
var JobOfferService = require('../jobOffer/JobOfferService');


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
	console.log('getUser');
	return new Promise(
		function(resolve, reject) {   
			var path = "users/" + userId;
			var dataAccess = new DataAccess();
			dataAccess.getData(path).then(
			    function(val) {
			    	if (val == null){
						reject();
					}
					var userFactory = new UserFactory();
					var user = userFactory.createUser(val);
					user.setUserId(userId);
					resolve(user)
				}
			);
	});
};

UserService.prototype.createUser = function(data) {
	console.log('createUser');
	return new Promise(
		function(resolve, reject) {   
			var userValidator = new UserValidator();
			userValidator.checkUserExist(data).then(
				function(val) {
					if (val){
						reject();
						return;
					}
					var userFactory = new UserFactory();
					var dataAccess = new DataAccess();	
					var user = userFactory.createUser(data);
					var userId = dataAccess.pushData("users",user);
					user.setUserId(userId);
					dataAccess.setData("users/"+userId,user);
					dataAccess.setData("usersList/"+user.getUserName(),user.getUserName());
					resolve(user);
					
				},
				function(){
					reject();
				}
			);
		}
	);

};

UserService.prototype.updateUser = function(userId,data) {
	var status = {};
	return status;
};

UserService.prototype.postulateJobOffer = function(userId,jobId) {
	console.log('postulateJobOffer',userId,jobId);
	return new Promise(
		function(resolve, reject) {
			console.log('postulateJobOffer',userId);   
			var userService = new UserService();
			userService.getUser(userId).then(
				function(user) {
					console.log('getUser',user);	
					console.log('getUser',jobId);	
					var jobOfferService = new JobOfferService();
					jobOfferService.getJobOffer(jobId).then(
						function(jobOffer){
							console.log('jobOffer',jobId);
							/*TODO: IMplementar esto*/
							// jobOffer.setUser(user);
							resolve(jobOffer)
						},
						function(){
							var args = [jobId,data]
							reject(args);
							return;
						}
					);
				},
				function(){
					var args = [user,data];
					reject(args);
					return;
				}
			);
		}
	);
};

module.exports = UserService;
