"use strict";

var promise = require("bluebird");

function asyncFunction() {
	
	var deferred = promise.pending();

	setTimeout(function() {
        	deferred.fulfill("ali");
    	}, 0);
	return deferred.promise;
}

//Asenkron fonksiyon kullanalım

asyncFunction()
	.then(function (result) {
		console.log(result);
	});


