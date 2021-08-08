var pies = {
  imiê: "Chojrak",
  ³apy: 4,
  jestKochany: true
};

pies.szczekniêcie = function () {
  console.log("Hau hau! Nazywam siê " + this.imiê + "!");
};

pies.szczekniêcie();
// Hau hau! Nazywam siê Chojrak!
