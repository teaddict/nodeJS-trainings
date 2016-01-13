"use strict";

var promise = require("bluebird");

function asyncFunction1(name,callback) {
	
	setTimeout(function() {
        	callback(null,"Selam " + name);
    	}, 0);
}

/* klasik callback fonksiyon çağırımı
function asyncFunction2(name) {
	
	var deferred = promise.pending();
	
	asyncFunction1(name,function(error,result){
		if(error) 
		{
			deferred.reject(error);
		}
		else
		{
			deferred.fulfill(result);
		}
	});
*/

//basitleştirilmiş hali
var asyncFunction2 = promise.promisify(asyncFunction1);
	

//asyncFunction1 fonk çağıralım

asyncFunction2("Ali")
	.then(function (result) {
		//asyncFunction1 cevabı yazdırdık
		console.log(result);
	}) //buraya noktalı virgül koyma!
	.catch(function (error) {
		console.log("Hata: " + error.message);
	});


