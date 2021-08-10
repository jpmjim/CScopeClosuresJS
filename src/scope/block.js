//Scope local en bloques
//var si puede acceder que se encuentra de una funcion
//let y const no pueden acceder ya que no estan dentro del bloques
//De esta forma puedo acceder a las variables declaradas dentro del IF, se puede acceder a ellas fuera del IF
// var fruit1 = 'Apple';
// var fruit2 = 'Banana';
// var fruit3 = 'Kiwi';
//cuando declaro las variables con LET y/o CONST dentro del IF, son locales para el bloque de codigo del IF
 //y no las puede acceder fuera del bloque IF, asi esten en la misma funcion
const fruist = () => {
  if (true) {
    var fruists1 = 'apple';
    let fruists2 = 'banana';
    const fruists3 = 'kiwi';
    console.log(fruists2);
    console.log(fruists3);  
  }
  console.log(fruists1);
}
fruist();

//Ejemplo, si usamos var los valores de la varible cambiarian.
let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

//Ejemplo
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
};
anotherFunction();

// Dentro de una función podemos tener un bloque de código, por ejemplo: un if, mientras lo llamamos sobre una llave estará guardado dentro de un bloque.

// Si definimos un elemento con var podemos acceder en todos los elementos de la función, si lo llamamos fuera del bloque donde está, vamos a poder acceder a ese elemento.

// Con let y const no vamos a poder acceder a ellos porque se establecen dentro del bloque, solo se puede acceder a ellos dentro de ese bloque.