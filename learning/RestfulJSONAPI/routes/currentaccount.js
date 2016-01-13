exports.process = function(req,res) {
	var response;
	
	if(req.body.MessageType == "Get") 
	{
		
		response = {
			"ResponseCode": 0,
			"ResponseMessage": "Islem Basarili",
			"CurrentAccountList": [{
				"ID": 10,
				"Name": "Ali"
			}, {
				"ID": 11,
				"Name": "Veli"
			}]
		};
	}
	else 
	{
		response = {
			"ResponseCode": 0,
			"ResponseMessage": "Islem Basarili"
		};
	}

	res.json(response);
};
