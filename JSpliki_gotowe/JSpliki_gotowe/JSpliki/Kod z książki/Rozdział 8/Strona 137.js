var wybierzLosoweS�owo = function (s�owa) {
  return s�owa[Math.floor(Math.random() * s�owa.length)];
};

var losoweCz�ciCia�a = ["Twarz", "Noga", "R�ka"];
var losowePrzymiotniki = ["Cuchn�ca", "Brudna", "G�upia"];
var losoweS�owa = ["Mucha", "Kuna", "Glista", "Ma�pa", "Norka"];

// Po��cz wszystkie wylosowane �a�cuchy w zdanie:
var losowy�a�cuch = "Twoja " + wybierzLosoweS�owo(losoweCz�ciCia�a) + " jest jak " + wybierzLosoweS�owo(losowePrzymiotniki) + " " + wybierzLosoweS�owo(losoweS�owa) + "!!!";
losowy�a�cuch;
// "Twoja Twarz jest jak Cuchn�ca Ma�pa!!!"
