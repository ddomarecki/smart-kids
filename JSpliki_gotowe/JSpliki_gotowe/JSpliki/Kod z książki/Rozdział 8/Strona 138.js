var wybierzLosoweS�owo = function (s�owa) {
  return s�owa[Math.floor(Math.random() * s�owa.length)];
};

generujLosow�Zniewag� = function () {
  var losoweCz�ciCia�a = ["Twarz", "Noga", "R�ka"];
  var losowePrzymiotniki = ["Cuchn�ca", "Nudna", "G�upia"];
  var losoweS�owa = ["Mucha", "Kuna", "Glista", "Ma�pa", "Norka"];

  // Po��cz wszystkie losowe �a�cuchy w zdanie:
  var losowy�a�cuch = "Twoja " + wybierzLosoweS�owo(losoweCz�ciCia�a) + " jest jak " + wybierzLosoweS�owo(losowePrzymiotniki) + " " + wybierzLosoweS�owo(losoweS�owa) + "!!!";

  return losowy�a�cuch;
};

generujLosow�Zniewag�();
// "Twoja Noga jest jak G�upia Kuna!!!"
