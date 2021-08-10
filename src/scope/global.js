//Variables en Scope Global
var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';
//La función puede acceder a las varibles, que se encuentran en el scope global.
//Con let y const no se puede asignar un nuevo valor a esa variable, var solo puede ser reasignado
const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}
anotherFunction();
//=======================================

//Ejemplo, mala practica para el desarrollo
const helloWorld = () => {
  globalVar = 'i am global'
}
helloWorld();
console.log(globalVar);


const anotherFunction = () => {
  var localVar = globalVar = 'Im global'
}
anotherFunction();
console.log(globalVar);
//============================================