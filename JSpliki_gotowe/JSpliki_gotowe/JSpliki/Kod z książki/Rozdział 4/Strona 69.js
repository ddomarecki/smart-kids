var dinozaury = [
  { nazwa: "Tyranozaur Rex", okres: "PóŸna kreda" },
  { nazwa: "Stegozaur", okres: "PóŸna jura" },
  { nazwa: "Plateozaur", okres: "Trias" }
];

dinozaury[0];
// { nazwa: "Tyranozaur Rex", okres: "PóŸna kreda" }
dinozaury[0]["nazwa"];
// "Tyranozaur Rex"
dinozaury[1].okres;
// "PóŸna jura"

var ania = { imiê: "Ania", wiek: 11, szczêœliweLiczby: [2, 4, 8, 16] };
var adam = { imiê: "Adam", wiek: 5, szczêœliweLiczby: [3, 9, 40] };
var asia = { imiê: "Asia", wiek: 9, szczêœliweLiczby: [1, 2, 3] };

var przyjaciele = [ania, adam, asia];

przyjaciele[1];
// { imiê: "Adam", wiek: 5, szczêœliweLiczby: Array[3] }

przyjaciele[2].imiê
// "Asia"

przyjaciele[0].szczêœliweLiczby[1];
// 4
