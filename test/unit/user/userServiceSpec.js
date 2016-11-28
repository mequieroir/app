'use strict';

var expect    = require("chai").expect;
var sinon      = require('sinon');
var proxyquire = require('proxyquire')

var users = [];

var DataAccessProxy = {
  	getData: function(){
    	return new Promise(
	    	function(resolve, reject) {      
    	 		resolve(users);
	 	 	}
	 	);
    },
    pushData: function(){
    	return new Promise(
	    	function(resolve, reject) {     
	    		var userId = users.lenght + 1;
    	 		resolve(userId);
	 	 	}
	 	);
    },
    setData: function(data){
    	return new Promise(
	    	function(resolve, reject) {      
    	 		resolve(data);
	 	 	}
	 	);
    }
};

var UserValidatorProxy = {
	checkUserExist: function(data) {
		console.log('checkUserExist',checkUserExist);
		return new Promise(
			function(resolve, reject) {   
				resolve(null)	
			}
		);
	}
}

var UserService = proxyquire('../../../src/models/user/UserService', 
						{ 
							'../../../src/models/user/UserValidator': UserValidatorProxy,
							'../../../src/repository/DataAccess': DataAccessProxy 
						});


describe('unit test de UserService', function () {
		
    it('debe retornar un listado de usarios vacia al no existir usuarios', function() {
    	var userService = new UserService();
    	userService.getUsers().then(
    		function(data){
             	expect(data.length).to.equal(users.length);
			}
    	);
    });

    it('debe poder crear un usuario con userName no utilizado', function() {
		var data = {
			userName: "agrojas"
		}
    	var userService = new UserService();
    	userService.createUser(data).then(
			function(val){
				//TODO: Esto debe fallar
             	expect(val).to.equal('');
			},
			function(err){
			}
		);
    });

});

