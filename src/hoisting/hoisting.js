//Hoisting El levantamiento de las declaraciones.
// El ‘levantamiento’ del que hablan es mas a fines didácticos y está bien, pero no es tan así, no es que FISICAMENTE levanta las declaraciones y las pone al principio como muchos explican. Lo que se hace en realidad es tomar ‘registros’ en memoria de donde está cada declaración(todo esto previo a que se ejecute el código en sí) y depende si es var, let, const o una función, JS va a asignarle referencias a cada una.
// Si es:

//var : asigna la referencia undefined (si de acá viene el famoso undefined)

//let/const: asigna la referencia uninitialized(declarado pero no inicializado)

//función: guarda un registro con la función entera(por eso la podemos llamar antes de que este creada)
//Hoisting solo se utliza solo en declaraciones y no en la inicializaciones.
a = 2;
var a;
console.log(a);

console.log(a);
var a = 2;

//Ejemplos
nameOfDog('Nani'); //hoisting prueba
function nameOfDog (name){
  console.log(name);
}
