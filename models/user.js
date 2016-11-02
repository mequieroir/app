"use strict";

function User(userName,firsName,lastName) {
	this.userName = userName || ''; 
	this.firsName = firsName || '';
	this.lastName = lastName || '';
}

User.prototype.getUserName = function() {
	return this.userName;
};

module.exports = User;
