"use strict"


var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/testdb', function(err) { 
	console.log('error occured', err); 
});
//mongoose.connect("mongodb://localhost/testdb");

var Schema = mongoose.Schema;

var currentAccountSchema = new Schema ( {
	currentAccountId: Number,
	nameSurname: String,
	contactInfo: {
		phoneNumber: Number,
		faxNumber: Number,
		emailAddress: String,
	},
	operations: [{
		operationId: Number,
		operationtype: String,
		date: {
			type: Date
		},
		amount: Number
	}]
});

var CurrentAccount = mongoose.model("CurrentAccount",currentAccountSchema);

/*"nameSurname" değişkeninde "e" geçen herkesin "contactInfo" alt nesnesindeki "faxNumber" değişkeninin değerinin "777" yapılması gibi. Bunun için "program.js" dosyamızı aşağıdaki gibi değiştirelim. */

CurrentAccount.update(  {nameSurname: /i/},
			{"contactInfo.faxNumber": "777"},
			{multi: true},
function(ex,numberAffectedRow) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		console.log(numberAffectedRow);
		console.log("işlem tamamlandı");
	}
});
