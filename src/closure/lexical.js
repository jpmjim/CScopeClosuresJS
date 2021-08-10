//Ámbito léxico en closures
//Como asignar valores y como podemos reasignar nuevos elementos  o construir nuevos elementos a partir
//de este mismo y como va recordar el valor despues de cada llamado.

//El ambito lexico es las funciones que se ejecutan utilizando la cadena del alcanze donde estaba vigente en su momento, donde esta asignado.
const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
}
const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount(); 


