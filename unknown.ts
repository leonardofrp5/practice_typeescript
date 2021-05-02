let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

// con esta forma le estamos diciendo q randomValue es tipo string por esto el compila sin problemas
// Nota: esto funcionaria bien al compilar pero puede traer errores futuros si cambia el tipo de ramdomValue
(randomValue as string).toUpperCase();
(<string>randomValue).toUpperCase();

// Esta forma es mucho mejor y ayuda vas a evitar erroes
// Ya que si vamos al archivo de Js veremos q la validacion sigue y si no cumple el tupo no se ejecuta.
if (typeof randomValue === 'string') {
  randomValue.toUpperCase();
}
