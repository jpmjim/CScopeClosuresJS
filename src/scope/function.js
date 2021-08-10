const fruist = () => {
  var fruit = 'apple';
  console.log(fruit);
};
fruist();
//no esta declarado de forma global
console.log(fruit);

//Ejemplo una funcion que nos permita establecer nuevas varibles para entender que ahi estamos estableciendo nuestro scope local dentro de una función.
const anotherFunction = () => {
  var x = 1;
  x = 2;
  let y = 1;
  let y = 2; //y ya no puede ser igual a 2 por que ya fue asignada.
  console.log(x);
  console.log(y);
}
anotherFunction();


// Las variables escritas con la palabra clave var pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

// Las variables escritas con la palabra clave let no pueden ser redeclaradas, si lo haces mostrara un “error: esta variable ya ha sido declarada” , pero su valor puede ser reasignado:
let fruit = "apple";
fruit = "banana";

console.log(fruit);

// Las variables escritas con la palabra clave const no pueden ser redeclaradas o reasignadas, ya que const quiere decir que su valor será constante, es decir que no va a cambiar.