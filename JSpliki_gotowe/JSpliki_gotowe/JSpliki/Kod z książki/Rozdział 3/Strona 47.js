var zwierzêta = [];
zwierzêta.push("Kot");
// 1
zwierzêta.push("Pies");
// 2
zwierzêta.push("Lama");
// 3
zwierzêta;
// ["Kot", "Pies", "Lama"]
zwierzêta.length;
// 3

zwierzêta;
// ["Kot", "Pies", "Lama"]
zwierzêta[0];
// "Kot"
zwierzêta.unshift("Ma³pa");
// 4
zwierzêta;
// ["Ma³pa", "Kot", "Pies", "Lama"]
zwierzêta.unshift("NiedŸwiedŸ polarny");
// 5
zwierzêta;
// ["NiedŸwiedŸ polarny", "Ma³pa", "Kot", "Pies", "Lama"]
zwierzêta[0];
// "NiedŸwiedŸ polarny"
zwierzêta[2];
// "Kot"

zwierzêta;
// ["NiedŸwiedŸ polarny", "Ma³pa", "Kot", "Pies", "Lama"]
var ostatnieZwierzê = zwierzêta.pop();
ostatnieZwierzê;
// "Lama"
zwierzêta;
// ["NiedŸwiedŸ polarny", "Ma³pa", "Kot", "Pies"]
zwierzêta.pop();
// "Pies"
zwierzêta;
// ["NiedŸwiedŸ polarny", "Ma³pa", "Kot"]
zwierzêta.unshift(ostatnieZwierzê);
// 4
zwierzêta;
// ["Lama", "NiedŸwiedŸ polarny", "Ma³pa", "Kot"]

zwierzêta;
// ["Lama", "NiedŸwiedŸ polarny", "Ma³pa", "Kot"]
var pierwszeZwierzê = zwierzêta.shift();
pierwszeZwierzê;
// "Lama"
zwierzêta;
// ["NiedŸwiedŸ polarny", "Ma³pa", "Kot"]
