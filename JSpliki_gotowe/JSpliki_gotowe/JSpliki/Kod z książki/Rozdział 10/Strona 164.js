var licznik = 1;

var wyœwietlajKomunikat = function () {
  console.log("Gapisz siê w konsolê ju¿ od " + licznik + " sekund");
  licznik++;
};

var idPrzedzia³u = setInterval(wyœwietlajKomunikat, 1000);
// Gapisz siê w konsolê ju¿ od 1 sekund
// Gapisz siê w konsolê ju¿ od 2 sekund
// Gapisz siê w konsolê ju¿ od 3 sekund
// Gapisz siê w konsolê ju¿ od 4 sekund
// Gapisz siê w konsolê ju¿ od 5 sekund
// Gapisz siê w konsolê ju¿ od 6 sekund
clearInterval(idPrzedzia³u);
