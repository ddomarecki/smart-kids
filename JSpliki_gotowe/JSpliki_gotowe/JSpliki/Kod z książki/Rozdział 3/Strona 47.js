var zwierz�ta = [];
zwierz�ta.push("Kot");
// 1
zwierz�ta.push("Pies");
// 2
zwierz�ta.push("Lama");
// 3
zwierz�ta;
// ["Kot", "Pies", "Lama"]
zwierz�ta.length;
// 3

zwierz�ta;
// ["Kot", "Pies", "Lama"]
zwierz�ta[0];
// "Kot"
zwierz�ta.unshift("Ma�pa");
// 4
zwierz�ta;
// ["Ma�pa", "Kot", "Pies", "Lama"]
zwierz�ta.unshift("Nied�wied� polarny");
// 5
zwierz�ta;
// ["Nied�wied� polarny", "Ma�pa", "Kot", "Pies", "Lama"]
zwierz�ta[0];
// "Nied�wied� polarny"
zwierz�ta[2];
// "Kot"

zwierz�ta;
// ["Nied�wied� polarny", "Ma�pa", "Kot", "Pies", "Lama"]
var ostatnieZwierz� = zwierz�ta.pop();
ostatnieZwierz�;
// "Lama"
zwierz�ta;
// ["Nied�wied� polarny", "Ma�pa", "Kot", "Pies"]
zwierz�ta.pop();
// "Pies"
zwierz�ta;
// ["Nied�wied� polarny", "Ma�pa", "Kot"]
zwierz�ta.unshift(ostatnieZwierz�);
// 4
zwierz�ta;
// ["Lama", "Nied�wied� polarny", "Ma�pa", "Kot"]

zwierz�ta;
// ["Lama", "Nied�wied� polarny", "Ma�pa", "Kot"]
var pierwszeZwierz� = zwierz�ta.shift();
pierwszeZwierz�;
// "Lama"
zwierz�ta;
// ["Nied�wied� polarny", "Ma�pa", "Kot"]
