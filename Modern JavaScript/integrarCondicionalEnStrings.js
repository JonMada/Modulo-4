//Integrar condicionales en strings mediante operadores ternarios y backticks

/*Imaginemos que queremos generar un mensaje determinado en función de la edad
del usuario */

const edad = 19;
const mensaje = `Tienes ${edad} años y eres ${ edad >= 18 ? 'mayor de edad' : 'menor de edad' }.`

console.log(mensaje); //salida --> Tienes 19 años y eres mayor de edad.