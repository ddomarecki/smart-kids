var losoweCz�ciCia�a = ["Twarz", "Noga", "R�ka"];
var losoweCz�ciCia�aZwierz�t = ["Kita", "�apa", "Grzywa"]
var losowePrzymiotniki = ["Cuchn�ca", "Niedomyta", "Niedorzeczna"];
var nazwaZwierz�ciaWDope�niaczu = ["Psa", "�wistaka", "Ma�py", "Szczura"];

var losowaCz��Cia�a = losoweCz�ciCia�a[Math.floor(Math.random() * 3)];
var losowaCz��Cia�aZwierz�t = losoweCz�ciCia�aZwierz�t[Math.floor(Math.random() * 3)];
var losowyPrzymiotnik = losowePrzymiotniki[Math.floor(Math.random() * 3)];
var losoweZwierz� = nazwaZwierz�ciaWDope�niaczu[Math.floor(Math.random() * 4)];

var losowaZniewaga = ["Twoja", losowaCz��Cia�a, "jest jeszcze bardziej", losowyPrzymiotnik, "ni�", losowaCz��Cia�aZwierz�t, losoweZwierz�].join(" ");
losowaZniewaga;
// "Twoja Noga jest jeszcze bardziej Niedomyta ni� �apa Ma�py"
