var dajG³os = function () {
  console.log(this.dŸwiêk + "! Nazywam siê " + this.imiê + "!");
};

var kot = {
  dŸwiêk: "Miau",
  imiê: "Filemon",
  dajG³os: dajG³os
};

kot.dajG³os();
// Miau! Nazywam siê Filemon!

var œwinia = {
  dŸwiêk: "Chrum",
  imiê: "£akomczucha",
  dajG³os: dajG³os
};

var koñ = {
  dŸwiêk: "Patataj",
  imiê: "Bucefa³",
  dajG³os: dajG³os
};

œwinia.dajG³os();
// Chrum! Nazywam siê £akomczucha!

koñ.dajG³os();
// Patataj! Nazywam siê Bucefa³!
