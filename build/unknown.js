"use strict";
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
// con esta forma le estamos diciendo q randomValue es tipo string por esto el compila sin problemas
// Nota: esto funcionaria bien al compilar pero puede traer errores futuros si cambia el tipo de ramdomValue
randomValue.toUpperCase();
randomValue.toUpperCase();
// Esta forma es mucho mejor y ayuda vas a evitar erroes
if (typeof randomValue === 'string') {
    randomValue.toUpperCase();
}
