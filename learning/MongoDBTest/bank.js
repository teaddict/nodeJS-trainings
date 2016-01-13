"use strict"


var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/testdb', function(err) { 
	console.log('error occured', err); 
});
//mongoose.connect("mongodb://localhost/testdb");

var Schema = mongoose.Schema;

var bankSchema = new Schema ( {
	bankId: Number,
	description: String,
	operations: [{
		operationId: Number,
		operationtype: String,
		date: {
			type: Date
		},
		amount: Number,
		receiptNo: Number
	}]
});

var Bank = mongoose.model("Bank",bankSchema);

var bank1 = new Bank();

bank1.bankId = 123;
bank1.description = "X BANKASI";

bank1.operations.push({
	operationId: 1,
	operationType: "Para Girişi",
	date : new Date(),
	amount : 1500,
	receiptNo: 1234
});


bank1.save(function(ex) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		console.log("işlem tamamlandı");
	}
});
