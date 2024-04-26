//Añadir elementos a un array

//'push()' --> agrega uno o más elementos al final de la matriz y nos devuelve la nueva longitud
let arr = ['uva','manzana'];
let nuevaLongitud = arr.push('a','b');
console.log(arr); //salida --> [ 'uva', 'manzana', 'a', 'b' ]
console.log(nuevaLongitud); //salida --> 4

//'unshift()' --> agrega uno o más elementos al inicio de la matriz y nos devuelve la nueva longitud
let arrTwo = ['uva','manzana'];
let nuevaLongitudTwo = arrTwo.unshift('a','b','c');
console.log(arrTwo); //salida --> [ 'a', 'b', 'c', 'uva', 'manzana' ]
console.log(nuevaLongitudTwo); //salida --> 5


//Eliminar elementos de un array

//'pop()' --> elimina el último elemento de una matriz y lo almacena
let eliminado = arrTwo.pop();
console.log(arrTwo); //salida --> [ 'a', 'b', 'c', 'uva' ]
console.log(eliminado); //salida --> manzana

//'shift()' --> elimna el primer elemento de una matriz y lo almacena
let elimnadoTwo = arr.shift();
console.log(arr); //salida --> [ 'manzana', 'a', 'b' ]
console.log(elimnadoTwo); //salida --> uva