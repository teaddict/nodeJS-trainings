"use strict";

process.on("message",function(params) {
	
	var total = params.value1 + params.value2;
	
	var startTime = new Date().getTime();

	while((new Date().getTime() - startTime) < 5000)
	{
		total += (params.value1 * params.value2);
	}

	process.send( { succeed: true, result: total });

	process.exit();
});
