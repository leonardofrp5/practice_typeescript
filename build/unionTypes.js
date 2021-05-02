"use strict";
let multiType;
// Permitio los dos valores
multiType = 20; //* Valid
multiType = true; //* Valid
// en esta mustra error ya que no permite string
// multiType = 'twenty'; //* Invalid
function add(x, y) {
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
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
