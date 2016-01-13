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


CurrentAccount.findById("55963e283109b50b1024ba86",function(ex,currentAccount) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		currentAccount.operations.push( {
			operationId: 3,
			operationType: "Para Girişi",
			date: new Date(),
			amount: 1000
		});
		currentAccount.save(function(err) {
			if(err)
			{
				console.log(err);
			}
			else
			{
				console.log("işlem tamamlandı");
			}
		});
	}
});
