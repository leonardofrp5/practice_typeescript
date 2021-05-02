"use strict";
// Enum donde el primmero valor inicia con 0 despues aumenta de a 1
var ContraStatus;
(function (ContraStatus) {
    ContraStatus[ContraStatus["Parament"] = 0] = "Parament";
    ContraStatus[ContraStatus["Temp"] = 1] = "Temp";
    ContraStatus[ContraStatus["Apprtince"] = 2] = "Apprtince";
})(ContraStatus || (ContraStatus = {}));
// Enum donde el primer valor inicia con 5 despues aumentea de a 1
var ContraStatusPlus;
(function (ContraStatusPlus) {
    ContraStatusPlus[ContraStatusPlus["Parament"] = 5] = "Parament";
    ContraStatusPlus[ContraStatusPlus["Temp"] = 6] = "Temp";
    ContraStatusPlus[ContraStatusPlus["Apprtince"] = 7] = "Apprtince";
})(ContraStatusPlus || (ContraStatusPlus = {}));
// Accedemos al valor de Temp en employeeStatus
const employeeStatus = ContraStatus.Temp;
// Accedemos al valor de Teemo en employeeStatusPlus
const employeeStatuPlus = ContraStatusPlus.Temp;
// Imprime el valor de cada uno
console.log(employeeStatus);
console.log(employeeStatuPlus);
// Podemos acceder al valor en texto de eesta  forma
console.log(ContraStatus[employeeStatus]);
