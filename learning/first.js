"use strict";

var http = require("http");

http.createServer(processRequest).listen(1234,"127.0.0.1");

function processRequest(request, response)
{
	response.writeHead(200,{"Content-Type": "text/html"});

	response.write("<b>Node.JS'den</b> sevgilerle..");
	
	response.end();
}
