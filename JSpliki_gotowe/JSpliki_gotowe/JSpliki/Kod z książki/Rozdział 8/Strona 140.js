var medalZaWynik = function (wynik) {
  if (wynik < 3) {
    return "Br�z";
  }
  if (wynik < 7) {
    return "Srebro";
  }

  return "Z�oto";
};