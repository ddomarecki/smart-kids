var losoweCz�ciCia�a = ["Twarz", "Noga", "R�ka"];
var losowePrzymiotniki = ["Cuchn�ca", "Brudna", "G�upia"];
var losoweS�owa = ["Mucha", "Kuna", "Glista", "Ma�pa", "Norka"];

// Wybierz losow� cz�� cia�a z tablicy losoweCz�ciCia�a:
var losowaCz��Cia�a = losoweCz�ciCia�a[Math.floor(Math.random() * 3)];

// Wybierz losowy przymiotnik z tablicy losowePrzymiotniki:
var losowyPrzymiotnik = losowePrzymiotniki[Math.floor(Math.random() * 3)];

// Wybierz losowe s�owo z tablicy losoweS�owa:
var losoweS�owo = losoweS�owa[Math.floor(Math.random() * 5)];

// Po��cz wszystkie wylosowane �a�cuchy w zdanie:
var losowaZniewaga = "Twoja " + losowaCz��Cia�a + " jest jak " + losowyPrzymiotnik + " " + losoweS�owo + "!!!";
losowaZniewaga;
// "Twoja twarz jest jak cuchn�ca ma�pa!!!"
