"use strict";

var childProcess = require("child_process");
var child = childProcess.fork("subProgram");

child.on("message",function(message) 
{
	console.log("işlem başarılı: " + message.succeed);
	console.log("İşlem Sonucu: " + message.result);
});

child.send({value1: 7, value2:8});
