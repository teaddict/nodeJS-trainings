"use strict"

var http = require("http");

var server = http.createServer(processRequest).listen(1234,"127.0.0.1");

function processRequest(request,response) 
{
	response.writeHead(200, {
		"Content-Type": "text/html"
	});

	response.write("simple HTML page");

	response.end();
}

var io = require("socket.io").listen(server);
var connectionCount = 0;

io.sockets.on('connection',function(socket) {
	
	connectionCount++;
	console.log("User Connected");
	
//broadcast , o ana kadar bağlanmış tüm clientlara gönderir
//emit yeni bağlanana
//böylece herkese gitmiş oldu!
	socket.broadcast.emit("connectionCountChanged",connectionCount);
	socket.emit("connectionCountChanged", connectionCount);	

        socket.on("disconnect",function() {
		connectionCount--;
		socket.broadcast.emit("connectionCountChanged",connectionCount);
                console.log("User disconnected");
        });

});

