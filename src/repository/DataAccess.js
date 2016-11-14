"use strict";
var firebase = require("firebase-admin");
var serviceAccount = require("../config/firebase-credentials.json");


firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://me-quiero-ir-api.firebaseio.com/"
});

function DataAccess() {
}


DataAccess.prototype.setData = function(path,data) {
  	var ref = firebase.database().ref(path);
	ref.set(data);
};

DataAccess.prototype.pushData = function(path,data) {
  	var ref = firebase.database().ref(path);
	var newPostRef = ref.push();
	var postId = newPostRef.key;
	return postId;
};

function callFirebase(path) {
	return new Promise(
		function(resolve, reject) {       
			var ref = firebase.database().ref(path);
			ref.once("value", function(snapshot) {
			  	resolve(snapshot.val())
			});
    	 	 
    });
}

DataAccess.prototype.getData = function(path) {
	return new Promise(
	    function(resolve, reject) {      
    	 	callFirebase(path).then(
    	 	 	function(val) {
    	 	 		resolve(val);
    	 	 	}
    	 	);
    });
};

module.exports = DataAccess;
