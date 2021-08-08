var filmy = {
  "Gdzie jest Nemo": {
    dataWydania: 2003,
    czasTrwania: 100,
    obsada: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },
  "Gwiezdne Wojny: Czêœæ VI - Powrót Jedi": {
    dataWydania: 1983,
    czasTrwania: 134,
    obsada: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter i czara ognia": {
    dataWydania: 2005,
    czasTrwania: 157,
    obsada: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    format: "Blu-ray"
  }
};

var gdzieJestNemo = filmy["Gdzie jest Nemo"];
gdzieJestNemo.czasTrwania;
// 100

gdzieJestNemo.format;
// "DVD"

var auta = {
  dataWydania: 2006,
  czasTrwania: 117,
  obsada: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
  format: "Blu-ray"
};
filmy["Auta"] = auta;

Object.keys(filmy);
// ["Gdzie jest Nemo", "Gwiezdne wojny: Czêœæ VI - Powrót Jedi", "Harry Potter i czara ognia", "Auta"]
