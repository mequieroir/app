'use strict';

var expect    = require("chai").expect;
var User = require("../../../src/models/user/User");

describe('unit test valida que user', function () {
	
	/* Test para verificar estado del servicio al iniciar*/
 	describe('al iniciar', function () {
 		
 		var user = new User();
        it('debe iniciar con userName en blanco', function() {
             expect(user.getUserName()).to.equal("");
        });

 	}); 	
});

