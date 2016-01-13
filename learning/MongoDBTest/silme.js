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

/* id ye göre bul ve sil */

CurrentAccount.findByIdAndRemove("55963f1e7cb4d75210d6a0ea",
function(ex) 
{
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		console.log("işlem tamamlandı");
	}
});

/*topluca silme , mesela /e/ harfi geçen isimler 
*/

CurrentAccount.remove( { nameSurname: /e/ },
function ( ex,numberAffectedRow) 
{

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
