//Creamos la función con la estructura de flecha
const eliminarPrimeroUltimo = matriz => {
    if (matriz.length >=3) {
        return matriz.slice (1,-1); //Seleccionamos mediante slice() los elementos deseados mediante índice.
    } else {
        throw 'Al menos necesitas una matriz de 3 elementos';
    }
};

//Probamos nuestra función
console.log(eliminarPrimeroUltimo([1,2,3,4,5])); //Salida--> [2,3,4]
console.log(eliminarPrimeroUltimo(['a','b','c','d','e'])); //Salida --> [ 'b', 'c', 'd' ]
console.log(eliminarPrimeroUltimo([1,2])); //Salida --> Al menos necesitas una matriz de 3 elementos

