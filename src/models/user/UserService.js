"use strict";

var User = require('./User');
var DataAccess = require('../../repository/DataAccess');


function UserService() {
	this.dataAccess = new DataAccess();
	this.userPath = "users";
}

UserService.prototype.getUsers = function() {
	var data = this.dataAccess.getData();
	return data;
};

UserService.prototype.getUser = function(userId) {
	var user = {};
	return user;
};

UserService.prototype.createUser = function(data) {
	var user = {};
	if (!this.dataAccess.saveData(this.userPath,data)) {
		status = new User() 
	}
	return user;
};

UserService.prototype.updateUser = function(data) {
	var status = {};
	return status;
};

module.exports = UserService;
