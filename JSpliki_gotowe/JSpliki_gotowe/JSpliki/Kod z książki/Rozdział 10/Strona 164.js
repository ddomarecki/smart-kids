var licznik = 1;

var wy�wietlajKomunikat = function () {
  console.log("Gapisz si� w konsol� ju� od " + licznik + " sekund");
  licznik++;
};

var idPrzedzia�u = setInterval(wy�wietlajKomunikat, 1000);
// Gapisz si� w konsol� ju� od 1 sekund
// Gapisz si� w konsol� ju� od 2 sekund
// Gapisz si� w konsol� ju� od 3 sekund
// Gapisz si� w konsol� ju� od 4 sekund
// Gapisz si� w konsol� ju� od 5 sekund
// Gapisz si� w konsol� ju� od 6 sekund
clearInterval(idPrzedzia�u);
