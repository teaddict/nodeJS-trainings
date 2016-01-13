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

var currentAccount1 = new CurrentAccount();

currentAccount1.currentAccountId = 3344;
currentAccount1.nameSurname = "Cemil";

currentAccount1.contactInfo.phoneNumber = 5555;
currentAccount1.contactInfo.faxNumber = 6666;
currentAccount1.contactInfo.emailAddress = "dd@cc.de"

currentAccount1.operations.push({
	operationId: 1,
	operationType: "Para Girişi",
	date : new Date(),
	amount : 500
});


currentAccount1.save(function(ex) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		console.log("işlem tamamlandı");
	}
});
