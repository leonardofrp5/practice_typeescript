let multiType: number | boolean;
// Permitio los dos valores
multiType = 20; //* Valid
multiType = true; //* Valid
// en esta mustra error ya que no permite string
// multiType = 'twenty'; //* Invalid

function add(x: number | string, y: number | string) {
  // estas validaciones lo q nos ayuda a asegurar q solo se ejecuta si cumple con los tipos
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  // estas validaciones lo q nos ayuda a asegurar q solo se ejecuta si cumple con los tipos
  if (typeof x === 'string' && typeof y === 'string') {
    // es mmas claro ver un concat que un signo de +
    return x.concat(y);
  }
  throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error

interface Employee {
  employeeID: number;
  age: number;
}

interface Manager {
  stockPlan: boolean;
}

// Este nos ayuda a tener varios tipo de intefaces en aca tenemos Employee & Manager en ManagementEmployee
type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true
};

//  Aca estamos definiendo a testResult que va a podoer usar los valores pass, fail y incomplete no permitira mas
type testResult = 'pass' | 'fail' | 'incomplete';
let myResult: testResult;
myResult = 'incomplete'; //* Valid
myResult = 'pass'; //* Valid
// por eso aca nos falla y sale q este error no es asinable a testResult
// myResult = 'failure'; //* Invalid
