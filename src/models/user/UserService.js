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
	return new Promise(
		function(resolve, reject) {   
			var userValidator = new UserValidator();
			if (!userValidator.isValidFields(data)){
				reject();
			}
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
				console.log('updateUser',data);
	return new Promise(
		function(resolve, reject) {
			var userService = new UserService();
			var userValidator = new UserValidator();
			if (!userValidator.isValidFields(data)){
				console.log('Invalid Fields');
				reject();
				return;
			}
			userService.getUser(userId).then(
				function(user) {
					console.log('data',data);
					var dataAccess = new DataAccess();
					var path = "users";
					dataAccess.updateData(path,userId,data).then(
					    function(val) {
							resolve(user)
						}
					);
				},
				function(){
					var args = [userId,data];
					reject(args);
					return;
				}
			);
		}
	);
};

UserService.prototype.postulateJobOffer = function(userId,jobId) {
	return new Promise(
		function(resolve, reject) {
			var userService = new UserService();
			userService.getUser(userId).then(
				function(user) {
					var jobOfferService = new JobOfferService();
					jobOfferService.getJobOffer(jobId).then(
						function(jobOffer){
							/*TODO: IMplementar esto*/
							// jobOffer.setUser(user);
							resolve(jobOffer)
						},
						function(){
							reject(jobId);
							return;
						}
					);
				},
				function(){
					reject(userId);
					return;
				}
			);
		}
	);
};

module.exports = UserService;
