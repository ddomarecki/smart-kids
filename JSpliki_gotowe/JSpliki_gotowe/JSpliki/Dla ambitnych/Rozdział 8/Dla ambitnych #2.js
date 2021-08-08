var porównajTablice = function (tablica1, tablica2) {
  if (tablica1.length !== tablica2.length) {
    return false;
  }

  for (var i = 0; i < tablica1.length; i++) {
    if (tablica1[i] !== tablica2[i]) {
      return false;
    }
  }

  return true;
};

porównajTablice([1, 2, 3], [4, 5, 6]);
// false

porównajTablice([1, 2, 3], [1, 2, 3]);
// true

porównajTablice([1, 2, 3], [1, 2, 3, 4]);
// false
