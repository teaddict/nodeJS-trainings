"use strict";

var express = require("express");
var app = express();

app.get('/',funciton(req,res) {
	res.send('Hello World!');
});

var server = app.listen(3000,function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('listenin at http://%s:%s',host,port);
});
