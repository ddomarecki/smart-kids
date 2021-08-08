var pi¹taLitera = function (imiê) {
  if (imiê.length < 5) {
    return;
  }

  return "Pi¹ta litera Twojego imienia to " + imiê[4] + ".";
};

pi¹taLitera("Tadeusz");
// "Pi¹ta litera Twojego imienia to u."

pi¹taLitera("Maja");
// undefined
