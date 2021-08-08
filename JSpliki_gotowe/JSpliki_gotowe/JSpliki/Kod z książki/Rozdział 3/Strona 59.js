var losoweCzêœciCia³a = ["Twarz", "Noga", "Rêka"];
var losowePrzymiotniki = ["Cuchn¹ca", "Brudna", "G³upia"];
var losoweS³owa = ["Mucha", "Kuna", "Glista", "Ma³pa", "Norka"];

// Wybierz losow¹ czêœæ cia³a z tablicy losoweCzêœciCia³a:
var losowaCzêœæCia³a = losoweCzêœciCia³a[Math.floor(Math.random() * 3)];

// Wybierz losowy przymiotnik z tablicy losowePrzymiotniki:
var losowyPrzymiotnik = losowePrzymiotniki[Math.floor(Math.random() * 3)];

// Wybierz losowe s³owo z tablicy losoweS³owa:
var losoweS³owo = losoweS³owa[Math.floor(Math.random() * 5)];

// Po³¹cz wszystkie wylosowane ³añcuchy w zdanie:
var losowaZniewaga = "Twoja " + losowaCzêœæCia³a + " jest jak " + losowyPrzymiotnik + " " + losoweS³owo + "!!!";
losowaZniewaga;
// "Twoja twarz jest jak cuchn¹ca ma³pa!!!"
