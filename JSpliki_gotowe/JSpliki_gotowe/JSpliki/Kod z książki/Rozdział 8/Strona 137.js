var wybierzLosoweS³owo = function (s³owa) {
  return s³owa[Math.floor(Math.random() * s³owa.length)];
};

var losoweCzêœciCia³a = ["Twarz", "Noga", "Rêka"];
var losowePrzymiotniki = ["Cuchn¹ca", "Brudna", "G³upia"];
var losoweS³owa = ["Mucha", "Kuna", "Glista", "Ma³pa", "Norka"];

// Po³¹cz wszystkie wylosowane ³añcuchy w zdanie:
var losowy£añcuch = "Twoja " + wybierzLosoweS³owo(losoweCzêœciCia³a) + " jest jak " + wybierzLosoweS³owo(losowePrzymiotniki) + " " + wybierzLosoweS³owo(losoweS³owa) + "!!!";
losowy£añcuch;
// "Twoja Twarz jest jak Cuchn¹ca Ma³pa!!!"
