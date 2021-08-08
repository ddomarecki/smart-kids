var losoweCzê¶ciCia³a = ["Twarz", "Noga", "Rêka"];
var losoweCzê¶ciCia³aZwierz±t = ["Kita", "£apa", "Grzywa"]
var losowePrzymiotniki = ["Cuchn±ca", "Niedomyta", "Niedorzeczna"];
var nazwaZwierzêciaWDope³niaczu = ["Psa", "¦wistaka", "Ma³py", "Szczura"];

var losowaCzê¶æCia³a = losoweCzê¶ciCia³a[Math.floor(Math.random() * 3)];
var losowaCzê¶æCia³aZwierz±t = losoweCzê¶ciCia³aZwierz±t[Math.floor(Math.random() * 3)];
var losowyPrzymiotnik = losowePrzymiotniki[Math.floor(Math.random() * 3)];
var losoweZwierzê = nazwaZwierzêciaWDope³niaczu[Math.floor(Math.random() * 4)];

var losowaZniewaga = ["Twoja", losowaCzê¶æCia³a, "jest jeszcze bardziej", losowyPrzymiotnik, "ni¿", losowaCzê¶æCia³aZwierz±t, losoweZwierzê].join(" ");
losowaZniewaga;
// "Twoja Noga jest jeszcze bardziej Niedomyta ni¿ £apa Ma³py"
