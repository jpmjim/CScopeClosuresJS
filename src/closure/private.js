//Cómo crear variables privadas con closures
// Variables privadas con Closures: JS por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.
const person = () => {
  var saveName = "Name"; //la variable va ser privada
  return {
    getName: () => { //es un metodo
      return saveName;
    },
    setName: (name) => { //otro metodo
      saveName = name;
    }
  }
}
newPerson = person();
console.log(newPerson.getName());//forma de acceder a esa varible
newPerson.setName('Jimmy');
console.log(newPerson.getName());
// Estamos generando una propiedad o un valor que es privado que no tenemos acceso a ella.
//No se pueden reasignar o  cambiar los valores si no hacemos uso(disponer) de los metodos creados para realizar las aginaciones.

//Con los closures podemos manejar datos privados.