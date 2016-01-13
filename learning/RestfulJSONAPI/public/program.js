$(document).ready(function () {
	$("#GetCurrentAccountList").click(function () {
	
		var request = {
			"MessageType": "Get",
			"Filter": {
				"FatherName": "Ahmet",
				"Gender": "Male"
			}
		};
		
		$.post("currentaccount",request,function(data) {
		
			alert("ResponseCode :" + data.ResponseCode + ", ResponseMessage : " + data.ResponseMessage);

			var i;
			for (i=0; i<data.CurrrentAccountList.lenght; i++)
			{
				alert(data.CurrentAccountList[i].ID + ", " + data.CurrentAccountList[i].Name);
			}
		});
	});


	$("#GetBankList").click(function() {
		var request = {
			"MessageType": "Get",
			"Filter": {
				"City": "Istanbul",
				"Currency": "TL"
			}
		};

		$.post("bank",request,function(data) {
			alert("ResponseCode : " + data.ResponseCode + ", ResponseMessage : " + data.ResponseMessage);
		
			var i;
			for(i=0; i<data.BankList.length; i++)
			{
				alert(data.BankList[i].ID + ", " + data.BankList[i].Description);
			}
		});
	});

	$("#AddCurrentAccount").click(function () {
 
        	var request = {
            		"MessageType": "New",
            		"CurrentAccount": {
                		"ID": 5,
               			"Name": "Ayşe",
                		"Gender": "Female",
                		"FatherName": "Mehmet"
            		}
        	};
 
        	$.post("currentaccount", request, function (data) {
 
            		alert("ResponseCode : " + data.ResponseCode + ", ResponseMessage : " + data.ResponseMessage);
 
        	});

	});
 
	$("#AddBank").click(function () {
 
    		var request = {
        		"MessageType": "New",
        		"Bank": {
                		"ID": 15,
                		"Description": "Z Bank",
                		"City": "Istanbul",
                		"Currency": "USD",
                		"AccountOwners": [{
                        		"Name": "Ali"
                    		}, {
                        		"Name": "Veli"
                    		}]
            		}
        	};
 
		$.post("bank", request, function (data) {
 
        		alert("ResponseCode : " + data.ResponseCode + ", ResponseMessage : " + data.ResponseMessage);
 
        	});
 
	});
 
});
