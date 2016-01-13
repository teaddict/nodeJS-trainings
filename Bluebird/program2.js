"use strict";

var promise = require("bluebird");

function asyncFunction1(name) {
	
	var deferred = promise.pending();

	setTimeout(function() {
        	deferred.fulfill("Selam 1, " + name);
    	}, 0);
	return deferred.promise;
}

function asyncFunction2(name) {
	
	var deferred = promise.pending();

	setTimeout(function() {
        	deferred.fulfill("Selam 2, " + name);
    	}, 0);
	return deferred.promise;
}

function asyncFunction3(name) {
	
	var deferred = promise.pending();

	setTimeout(function() {
        	deferred.fulfill("Selam 3, " + name);
    	}, 0);
	return deferred.promise;
}


//asyncFunction1 fonk çağıralım

asyncFunction1("Ali")
	.then(function (result) {
		//asyncFunction1 cevabı yazdırdık
		console.log(result);
		//asyncFunction2 çağıralım
		return asyncFunction2("Veli");
	}) //buraya noktalı virgül koyma!
	.then(function(result) {
		//asyncFunction2 sonucunu yazdırdık
		console.log(result);
		//asyncFunction3 çağıralım
		return asyncFunction3("Ayse");
	})
	.then(function (result) {
		//asyncFunction3 sonucu yazdıralım
		console.log(result);
		//hata verdirelim
		return asyncFunction4("Cemil");
	})
	.catch(function (error) {
		console.log("Hata: " + error.message);
	});


