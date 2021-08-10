//Scope Local
//El Local Scope: se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entorno en donde conviven.
const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};
helloWorld();
//Variable solo esta de forma local (no esta definido la variable en forma global), lo cual no da un error.
console.log(hello);

//Ambito Lexico
//Lexical Scope / Ámbito Léxico: El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.

// Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función.
var scope = 'i am global';
const functionScope = () => {
  var scope = 'i am just a local';
  const func = () => {
    return scope;
  }
  console.log(func());
};
functionScope();
console.log(scope);