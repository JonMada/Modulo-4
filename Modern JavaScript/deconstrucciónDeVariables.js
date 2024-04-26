//Esto nos permite intercambiar los valores de las variables de manera concica.
//Creamos nuestras variables

let numOne = 10;
let numTwo = 20;

//Sintaxis de deconsturcción: lado izquierdo, valores de intercambio; lado derecho, variables originales
[numTwo, numOne] = [numOne,numTwo];

//Comprobamos que se han intercambiado los valores
console.log(numOne); //salida --> 20
console.log(numTwo); //salida --> 10