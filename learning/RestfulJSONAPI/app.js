"use strict";

var express = require('express');
var logger = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var routes = require('./routes');
var currentAccount = require('./routes/currentaccount');
var bank = require('./routes/bank');
var http = require('http');
var path = require('path');

var app = express();

app.set('port',2222);
app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json()); 
app.use(express.static(path.join(__dirname,'public')));

app.get('/',routes.index);
app.post('/currentaccount',currentAccount.process);
app.post('/bank',bank.process);

http.createServer(app).listen(app.get('port'),function () {
	console.log('express server listenin on port ' + app.get('port'));
});


