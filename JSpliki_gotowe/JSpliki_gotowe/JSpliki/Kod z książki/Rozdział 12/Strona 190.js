var dajG�os = function () {
  console.log(this.d�wi�k + "! Nazywam si� " + this.imi� + "!");
};

var kot = {
  d�wi�k: "Miau",
  imi�: "Filemon",
  dajG�os: dajG�os
};

kot.dajG�os();
// Miau! Nazywam si� Filemon!

var �winia = {
  d�wi�k: "Chrum",
  imi�: "�akomczucha",
  dajG�os: dajG�os
};

var ko� = {
  d�wi�k: "Patataj",
  imi�: "Bucefa�",
  dajG�os: dajG�os
};

�winia.dajG�os();
// Chrum! Nazywam si� �akomczucha!

ko�.dajG�os();
// Patataj! Nazywam si� Bucefa�!
