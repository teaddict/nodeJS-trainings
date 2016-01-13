"use strict"

var fs = require("fs");

//dosyanın adını değiştirmek
fs.rename("Ali.txt","Veli.txt",function(ex) {

	if(ex)
	{
		console.log(ex);
	}
});

//senkron olarak çalıştırırsak thread bloklanır
try
{
	fs.renameSync("Veli.txt","Ahmet.txt");
}
catch(ex)
{
	console.log(ex)
}

//klasör oluşturma

fs.mkdir("Ali",function(ex) {
	if(ex)
	{
		console.log(ex);
	}
});

//boş klasör silme

fs.rmdir("Ali",function(ex) {
	if(ex)
        {
                console.log(ex);
        }
});

//klasörde bulunan dosya ve klasörleri okuyup files içne atar

fs.readdir("Ali",function(ex,files) {
	if(ex)
        {
                console.log(ex);
        }
	else
	{
		console.log(files);
	}
});


// dosya ya da klasörün varolup olmadığını kontrol etmek için

fs.exists("Ali.txt", function(val) {
	if(val)
        {
                console.log("dosya mevcut");
        }
	else
	{
		console.log("dosya mevcut değil");
	}
});

//dosya ya da klasör özelliklerini listelemek için 

fs.stat("Ali.txt",function(ex,stats) {
	if(ex)
        {
                console.log(ex);
        }
	else
	{
		console.log(stats);
	}
});

// belirtilen karakterden sonrasını silmek için
//10. karakterden sonrasını sil
fs.truncate("Ali.txt",10,function(ex) {
	if(ex)
        {
                console.log(ex);
        }
});

/*
Belirtilen klasörün altındaki dosya ve klasör hareketlerini izler. Herhangi bir yeni dosya/klasör oluşumu, silimi, taşınması, yeniden adlandırılması veya özellik değişimi yaşandığında, callback fonksiyonunu çağırır. Callback fonksiyonu iki parametre alır. İlk parametre, değişikliğin ne olduğunu gösteren event parametresidir. Dosya oluşturma, taşıma ve silme gibi işlemler "rename" olarak geçer. Dosya yetkileri gibi özelliklerinin değiştirilmesi ise "change" olarak geçer. Callback fonksiyonunun ikinci parametresi ise, tetiklemeye sebep olan dosya ve klasörün yoludur. Örneğin aşağıdaki kod, uygulamamızın bulunduğu klasördeki "Ali" isimli klasörün altında bulunan dosya ve klasör hareketlerini izleyerek ekrana yazdırır.
*/

fs.watch("Ali",function(event,filename) {
	console.log(event);
	console.log(filename);
});

//dosya okumak için

fs.readFile("Ali.txt","utf8",function(ex,data) {
	if(ex)
	{
		console.log(ex);
	}
	else
	{
		console.log(ex);
	}
});

//dosya yazmak için

fs.writeFile("Ali.txt","Deneme test yazı de",function(ex) {
	if(ex)
	{
		console.log(ex);
	}
});

//dosyaya veri eklemek için

fs.appendFile("Ali.txt","bu satırı ben ekledim",function(ex) {
	if(ex)
	{
		console.log(ex);
	}
});

