"use strict";

var _ = require("underscore");

var data = [1,2,3,4,11,25,33,11,3,4,5,6,2,2,1,100,45];

//dizide tekrarlanan elemanları sildi
var distinctList = _.unique(data);

_.each(distinctList,function(item) {
	console.log(item);
})

//range(altsınır,üstsınır,aralık) şeklinde dizi üretir

var rangeList = _.range(5,25,3);

_.each(rangeList,function(item) {
	console.log(item);
})

/*debounce , Bununla normal bir fonksiyonun yerini temsil edecek bir  fonksiyon tanımlarız. Tanımlama sırasında da milisaniye cinsinden bir süre veririz. Tanımladığımız bu temsili fonksiyon, belirtilen süre içerisinde en fazla 1 kez çağırılabilir, süre dolana kadar takip eden diğer çağırımlar işletilmez.
Örneğin çift tıklama sendromu müptelası kullanıcılarımızın ekrandaki butonlara mükerrer basmaları sırasında, ilk basıştan itibaren 0,5 saniye boyunca tıklamaların geçersiz hale getirilmesi bir örnek olabilir mi?
*/

var writeTest = function() {
	console.log("debounce çalıştırıldı");
};

var writeTestFn = _.debounce(writeTest,5000,true);

writeTestFn();
writeTestFn();
writeTestFn();
writeTestFn();
