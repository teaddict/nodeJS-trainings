"use strict";

var bcrypt = require("bcrypt");


var pass = "çok gizli bir şifre";

bcrypt.hash(pass,10,function(err,hash)
{
	if(!err)
	{
		console.log("Hash: " + hash);
	}
	else
	{
		console.log("Hata: " + hash);
	}
});

var password = "çok gizli bir şifre";
var hash = "burada hash bilgisi olacak";
bcrypt.compare(password,hash,function(err,res) {
	if(!err)
	{
		if(res==true)
		{
			console.log("şifre doğru!");	
		}
		else
		{
			console.log("şifre yanlış!!");
		}
	}
	else
	{
		console.log("Hata: " + hash);
	}
});


bcrypt.genSalt(10,function(err,salt)
{
	bcrypt.hash("çok güçlü bi şifre",salt,function(err,hash) {

		if(!err)
		{
			console.log("Hash: " + hash);
		}
		else
		{
			console.log("Hata: " + hash);
		}
	});
});

