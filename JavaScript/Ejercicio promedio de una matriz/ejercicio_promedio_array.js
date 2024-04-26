const getAverage = arr => {
    //En estas líneas obtenemos la suma de los elementos de nuestra matriz
    const reducer = (total, element) => total + element;
    const sum = arr.reduce(reducer); //La función reduce toma como argumento una función de reducción

    //Dividimos nuesto 'sum' entre el lenght del array para obtener el promedio
    return sum / arr.length;
}

//Creamos nuestra variable
const arr = [1,2,3,4,5,6];

//Aplicamos nuestra función
console.log(getAverage(arr)); //Salida: 3.5