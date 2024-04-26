//Construimos nuestros objetos
const persona1 = {
    nombre: 'Jon',
    edad: 30,
};

const persona2 = {
    nombre: 'Jon',
    edad: 30,
};

//Construimos nuestra función para comparar si los valores de los objetos son iguales

const esIgual = (objeto1, objeto2) => {
    //Extraemos y almacenamos las claves de nuestros objetos
    const objeto1Keys = Object.keys(objeto1); //Esto nos devuelve una matriz con las claves de nuesto objeto
    const objeto2Keys = Object.keys(objeto2);

    //Comprobamos que ambos objetos tienen el mismo número de 'keys'
    if (objeto1Keys.length !== objeto2Keys.length) {
        return false;
    }

    //Aplicamos un loop, una vez hemos comprobado que son iguales los keys, para ver si los valores son iguales.
    //La sintaxis representa --> persona1[nombre](extrae el valor 'Jon') es diferente a persona2[nombre](extrae el valor)
    for (let objetoKey of objeto1Keys) {
        if (objeto1[objetoKey] !== objeto2[objetoKey]) {
            return false;
        }
    }

    //Si no se cumple ninguna de la concurrencias anteriores, los valores de ambos objetos son iguales
    return true;
};

//Probamos nuestra función
console.log(esIgual(persona1, persona2)); 

//Esta solución únicamente funciona con objetos simples, sin elementos anidados dentro de ellos.
//La comparación de los objetos siguiente, aunque tienen valores idénticos, la función no funcionaria.

const persona3 = {
    nombre: 'Jon',
    edad: 30,
    favoritos: {
        deporte: 'escalada'
    }
};

const persona4 = {
    nombre: 'Jon',
    edad: 30,
    favoritos: {
        deporte: 'escalada'
    }
};


//Como solución contamos con la función '_.isEqual(valor, otroValor).
//Para utilizarla tenemos que instalar la librería 'lodash' y cargarla

//1- npm install lodash en el terminal

//Cargamos librería
const _ = require('lodash');

//Probamos la función
console.log(_.isEqual(persona3,persona4));