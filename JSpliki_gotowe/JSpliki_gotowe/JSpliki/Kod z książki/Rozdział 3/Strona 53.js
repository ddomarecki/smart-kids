var nudneZwierzêta = ["Ma³pa", "Kot", "Ryba", "Jaszczurka"];
nudneZwierzêta.join();
// "Ma³pa,Kot,Ryba,Jaszczurka"

var nudneZwierzêta = ["Ma³pa", "Kot", "Ryba", "Jaszczurka"];
nudneZwierzêta.join(" - ");
// "Ma³pa - Kot - Ryba - Jaszczurka"
nudneZwierzêta.join("*");
// "Ma³pa*Kot*Ryba*Jaszczurka"
nudneZwierzêta.join(" to nie ");
// "Ma³pa to nie Kot to nie Ryba to nie Jaszczurka"

var mojeImiona = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
mojeImiona.join(" ");
// "Nicholas Andrew Maxwell Morgan"

mojeImiona[0] + " " + mojeImiona[1] + " " + mojeImiona[2] + " " + mojeImiona[3];
// "Nicholas Andrew Maxwell Morgan"
