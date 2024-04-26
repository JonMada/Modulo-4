//Eliminar elementos con 'splice()'
let num = [1,2,3,4,5];
let numEliminados = num.splice(2,2); //Elimina a partir del indice 2 dos elementos
console.log(num); //salida --> [ 1, 2, 5 ]
console.log(numEliminados); //salida --> [ 3, 4 ]

//Reemplazar elementos con 'splice()'
let numTwo = [1,2,3,4,5];
numTwo.splice(2,2,6,7); //Sustituye dos elementos a partir del índice 2 con el 6 y el 7
console.log(numTwo); //Salida --> [ 1, 2, 6, 7, 5 ]

//Agregar elementos con 'splice()'
let numThree = [1,2,3,4,5];
numThree.splice(2,0,6,7) //Agrega dos elementos 6 y 7 a partir del indice 2, sin eliminar nada
console.log(numThree); //salida --> [1,2,6,7,3,4,5]