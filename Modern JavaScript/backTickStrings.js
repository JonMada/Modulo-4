//La sintaxis básica para la interpolación con backticks es: `${variable}`
const nombre = 'Jon';
const edad = 30;

const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje); //salida --> Hola, mi nombre es Jon y tengo 30 años.

//Dentro de la interpolación podemos meter cualquier código JS
const str = `Hola, ${2 + 2 + ' ' +  nombre}`;
console.log(str); //salida --> Hola, 4 Jon