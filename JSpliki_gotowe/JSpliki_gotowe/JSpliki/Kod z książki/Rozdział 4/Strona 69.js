var dinozaury = [
  { nazwa: "Tyranozaur Rex", okres: "P�na kreda" },
  { nazwa: "Stegozaur", okres: "P�na jura" },
  { nazwa: "Plateozaur", okres: "Trias" }
];

dinozaury[0];
// { nazwa: "Tyranozaur Rex", okres: "P�na kreda" }
dinozaury[0]["nazwa"];
// "Tyranozaur Rex"
dinozaury[1].okres;
// "P�na jura"

var ania = { imi�: "Ania", wiek: 11, szcz�liweLiczby: [2, 4, 8, 16] };
var adam = { imi�: "Adam", wiek: 5, szcz�liweLiczby: [3, 9, 40] };
var asia = { imi�: "Asia", wiek: 9, szcz�liweLiczby: [1, 2, 3] };

var przyjaciele = [ania, adam, asia];

przyjaciele[1];
// { imi�: "Adam", wiek: 5, szcz�liweLiczby: Array[3] }

przyjaciele[2].imi�
// "Asia"

przyjaciele[0].szcz�liweLiczby[1];
// 4
