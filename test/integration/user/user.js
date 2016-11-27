/* Test funcionales de user*/
'use strict';

var expect    = require("chai").expect;
var request = require("request");
var url = "http://localhost:3000/user";

describe('Test Api - user', function () {

    it('returns status 200', function() {
         request(url, function(error, response, body) {
	        expect(response.statusCode).to.equal(200);
	        done();
	      });
    });

});


	 		
/*Un usuario no puede existir dos veces en el sistema, esto se valida mediante el campo userName*/
/*Un usuario no puede existir dos veces en el sistema, esto se valida mediante el campo userName*/

/*Un usuario del tipo empresa no puede realizar una búsqueda laboral*/

/*Un usuario del tipo persona no puede realizar una oferta laboral*/

/*Un usuario del tipo persona puede tener N búsquedas activas.*/

/*Un usuario del tipo empresa puede tener N ofertas activas.*/

/*Tanto un usuario del tipo persona como empresa pueden dar de baja o modificar sus publicaciones.*/
