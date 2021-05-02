// Enum donde el primmero valor inicia con 0 despues aumenta de a 1
enum ContraStatus {
  Parament,
  Temp,
  Apprtince
}

// Enum donde el primer valor inicia con 5 despues aumentea de a 1
enum ContraStatusPlus {
  Parament = 5,
  Temp,
  Apprtince
}

// Accedemos al valor de Temp en employeeStatus
const employeeStatus: ContraStatus = ContraStatus.Temp;

// Accedemos al valor de Teemo en employeeStatusPlus
const employeeStatuPlus: ContraStatusPlus = ContraStatusPlus.Temp;

// Imprime el valor de cada uno
console.log(employeeStatus);
console.log(employeeStatuPlus);
// Podemos acceder al valor en texto de eesta  forma
console.log(ContraStatus[employeeStatus]);
