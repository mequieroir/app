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

DataAccess.prototype.getDataFiltered = function(path,filter,value) {
	return new Promise(
	    function(resolve, reject) {      
    	 	callFirebase(path,filter,value).then(
    	 	 	function(val) {
    	 	 		resolve(val);
    	 	 	}
    	 	);
    });
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

function callFirebaseFiltered(path,field,value) {
	return new Promise(
		function(resolve, reject) {       
			var ref = firebase.database().ref(path);
			ref.orderByChild(field).equalTo(value.once("value", function(snapshot) {
			  	resolve(snapshot.val())
			});
    	 	 
    });
}

module.exports = DataAccess;
