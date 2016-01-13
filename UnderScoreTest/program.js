"use strict";

var _ = require("underscore");

var data = [
	{name: "Ali", age: 13},
	{name: "Cem", age: 23}
];

_.each(data,function(item) {
	console.log(item.name + " " + item.age);
})
