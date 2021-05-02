"use strict";
var ContraStatus;
(function (ContraStatus) {
    ContraStatus[ContraStatus["Parament"] = 0] = "Parament";
    ContraStatus[ContraStatus["Temp"] = 1] = "Temp";
    ContraStatus[ContraStatus["Apprtince"] = 2] = "Apprtince";
})(ContraStatus || (ContraStatus = {}));
const employeeStatus = ContraStatus.Temp;
console.log(employeeStatus);
console.log(ContraStatus[employeeStatus]);
