exports.process = function (req,res) {
	var response;
	
	if(req.body.MessageType == "Get") 
	{
		response = {
			"ResponseCode": 0,
			"ResponseMessage": "Islem Basarili",
			"BankList": [{
				"ID": 3,
				"Description": "C Bank"
			}, {
				"ID": 4,
				"Description": "D Bank"
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
