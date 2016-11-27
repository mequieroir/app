'use strict';

var expect    = require("chai").expect;
var Person = require("../../../src/models/user/Person");

describe('unit test valida que person', function () {
	
	/* Test para verificar estado del servicio al iniciar*/
 	describe('al iniciar', function () {
 		
 		var person = new Person();
        it('debe iniciar con userName en blanco', function() {
             expect(person.getUserName()).to.equal("");
        });

 	}); 	
});

