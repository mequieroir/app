"use strict";

var User = require('./User');
var DataAccess = require('../../repository/DataAccess');


function UserService() {
	this.dataAccess = new DataAccess();
}

UserService.prototype.getUsers = function() {
	var data = this.dataAccess.getData();
	return data;
};

module.exports = UserService;
