const aLaPotenciaDe = (num, exponente) => {
    const elementos = Array(exponente).fill(num); //Crea un array de x longitud y lo rellena con el mismo número
    const reducer = (acumulador,valorActual) => acumulador * valorActual;
    return elementos.reduce(reducer); //El método reduce toma como argumento una función reductora
}

//Aplicamos nuestra función
console.log(aLaPotenciaDe(2,4)); //salida --> 16
console.log(aLaPotenciaDe(10,5)); //salida --> 100000