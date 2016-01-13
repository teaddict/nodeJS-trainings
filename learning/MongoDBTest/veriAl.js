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

CurrentAccount.find(function(ex,currentAccounts) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		for(var i=0; i<currentAccounts.length; i++)
		{
			console.log(currentAccounts[i].nameSurname);
			console.log(currentAccounts[i].contactInfo.emailAddress);
			console.log(currentAccounts[i].operations[0].amount);
			console.log("----------------------------------------");
		}
	}
});

CurrentAccount.find({nameSurname: "Ali"},
		function(ex,currentAccounts) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		console.log("Speisifik veri alalım");
		console.log("------------------------------------");
		for(var i=0; i<currentAccounts.length; i++)
		{
			console.log(currentAccounts[i].nameSurname);
			console.log(currentAccounts[i].contactInfo.emailAddress);
			console.log(currentAccounts[i].operations[0].amount);
			console.log("----------------------------------------");
		}
	}
});

/*isminde "li" geçenler için /li/ kullanılır.
gte : greater or equal 
lte : less or equal
lt :  less
şeklinde kullanılıyor
$gte = 2000, Id si 2000den büyük ya da elit olanlar gelcek
*/
CurrentAccount.find({nameSurname: /il/, currentAccountId: {$gte: 2000}},
		function(ex,currentAccounts) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		console.log("/il/ ve gte = 2000 uygulandı");
		console.log("------------------------------------");
		for(var i=0; i<currentAccounts.length; i++)
		{
			console.log(currentAccounts[i].nameSurname);
			console.log(currentAccounts[i].contactInfo.emailAddress);
			console.log(currentAccounts[i].operations[0].amount);
			console.log("----------------------------------------");
		}
	}
});

//and or vs kullanalım
CurrentAccount.find(
{
	$and: [
		{
			nameSurname: /l/
		},
/*
		{
			or: [{"currentAccountId.operations": {$gt: {$size:0}}},
			     {currentAccountId: {$not: {$gte: 10000} } } ]
		},

		{
			or: [{"contactInfo.emailAddress": "aa@bbb.de"},
			     {"contactInfo.emailAddress": "dd@cc.de"} ]
		}
*/
	      ]
},
function(ex,currentAccounts) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		console.log("and ve or kullanıldı");
		console.log("------------------------------------");
		for(var i=0; i<currentAccounts.length; i++)
		{
			console.log(currentAccounts[i].nameSurname);
			console.log(currentAccounts[i].contactInfo.emailAddress);
			console.log(currentAccounts[i].operations[0].amount);
			console.log("----------------------------------------");

		}
	}
});

//eğer tek bir nesneyi çekmek isteseydik, bir dizi değil de tek bi nesne dönsün
CurrentAccount.findOne( { nameSurname: /l/ }, function(ex,currentAccounts) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		console.log("tek bir nesne çektik");
		console.log("------------------------------------");
		console.log(currentAccounts.nameSurname);
		console.log(currentAccounts.contactInfo.emailAddress);
		console.log(currentAccounts.operations[0].amount);
		console.log("----------------------------------------");

	}
});

