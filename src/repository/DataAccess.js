"use strict";
var firebase = require("firebase-admin");
var serviceAccount = require("../config/firebase-credentials.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://me-quiero-ir-api.firebaseio.com/"
});

function DataAccess() {
}


DataAccess.prototype.saveData = function(path,data) {
  	var ref = firebase.database().ref(path);
  	try {
    // the synchronous code that we want to catch thrown errors on
		ref.set(data);
	} catch (err) {
	    // handle the error safely
	    console.log(err)
	    return false;
	}
	return true;
};

DataAccess.prototype.getData = function(path,data) {
	// var data = [
	// 	{"userId":"1","userName":"user1","telephone":"111","address":"a111"},
	// 	{"userId":"2","userName":"user2","telephone":"222","address":"a222"},
	// 	{"userId":"3","userName":"user3","telephone":"333","address":"a333"},
	// ];
  	var ref = firebase.database().ref(path);
	ref.once("value", function(data) {
	  // do some stuff once
	});
	return data;
};

module.exports = DataAccess;
