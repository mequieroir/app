"use strict";

function User(userName,email,telephone, address) {
	this.userId = ''; 
	this.userName = userName || ''; 
	this.telephone = telephone || '';
	this.address = address || '';
}

User.prototype.getUserId = function() {
	return this.userId;
};

User.prototype.getUserName = function() {
	return this.userName;
};

User.prototype.getEmail = function() {
	return this.email;
};

User.prototype.getTelephone = function() {
	return this.telephone;
};

User.prototype.getAddress = function() {
	return this.address;
};

User.prototype.setUserName = function(userName) {
	this.userName = userName;
};

User.prototype.setEmail = function(email) {
	this.email = email;
};

User.prototype.setTelephone = function(telephone) {
	this.telephone = telephone;
};

User.prototype.setAddress = function(address) {
	this.address = address;
};

module.exports = User;
