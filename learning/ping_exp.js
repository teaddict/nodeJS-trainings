"use strict";

//burda modüllerimizi kaydediyoruz
var http = require("http");
var ping = require("ping");

http.createServer(processRequest).listen(1234,"127.0.0.1");

function processRequest(request,response)
{
	ping.sys.probe("www.google.com",function (isAlive) {
	
		var message = isAlive ? "Google ayakta" : "Google gitti";
		response.writeHead(200,{ "Content-Type" : "text/html"});
		response.write(message);
		response.end();
	});
}

