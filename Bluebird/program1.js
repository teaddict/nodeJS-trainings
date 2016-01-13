"use strict";

var promise = require("bluebird");

function asyncFunction() {
	
	var deferred = promise.pending();

	setTimeout(function() {
        	deferred.reject(new Error("Mesaj"));
    	}, 0);
	return deferred.promise;
}

//Asenkron fonksiyon kullanalım

asyncFunction()
	.then(function (result) {
		console.log(result);
	}) //buraya noktalı virgül koyma!
	.catch(function (error) {
		console.log("Hata: " + error.message);
	});


