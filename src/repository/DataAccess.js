"use strict";

function Repository() {
}


Repository.prototype.getDataFromPath = function(path) {

};

Repository.prototype.getData = function() {
	var data = [
		{"userId":"1","userName":"user1","telephone":"111","address":"a111"},
		{"userId":"2","userName":"user2","telephone":"222","address":"a222"},
		{"userId":"3","userName":"user3","telephone":"333","address":"a333"},
	];
	return data;
};

module.exports = Repository;
