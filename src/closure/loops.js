//Loops
//Podemos crear closures de diferentes formas y tambien de forma involuntarias, no tenemos control de lo que estamos creando.
//En un loop nunca ocupes var, siempre utiliza let para valores que irán cambiando dentro de la ejecución del scope.
// tenemos que tener cuidado con nuestras asignaciones o bloques de código que de alguna manera nosotros no controlemos muchas veces sucede porque no establecimos nuestros elementos correctamente.
// Con el uso del Scope y los Closures podemos optimizar nuestros proyectos sin ningún problema.
const anotherFunction = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
};
anotherFunction();