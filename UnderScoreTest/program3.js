"use strict";

var _ = require("underscore");

var data = [
        { id: 1, name: "Ali", age: 45, gender: "Erkek" },
        { id: 2, name: "Veli", age: 25, gender: "Erkek" },
        { id: 3, name: "Ahmet", age: 45, gender: "Erkek" },
        { id: 4, name: "Mehmet", age: 20, gender: "Erkek" },
        { id: 5, name: "Ayse", age: 40, gender: "Kadin" },
        { id: 6, name: "Fatma", age: 30, gender: "Kadin" }
    ];

var list = _.where(data, { gender: "Erkek", age: 45 });

_.each(list,function(item) {
	console.log(item.name + " " + item.gender);
})
