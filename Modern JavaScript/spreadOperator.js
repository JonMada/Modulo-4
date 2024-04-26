//Spread operator (...) --> 1- Permite unir arrays y objetos
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const mergedArrs = [...arr1, ...arr2];
console.log(mergedArrs); //salida --> [ 1, 2, 3, 4, 5, 6 ]

const obj1 = {a:1, b: 2};
const obj2 = {c:3, d:4};

const mergedObjs = {...obj1, ...obj2};
console.log(mergedObjs); //salida --> { a: 1, b: 2, c: 3, d: 4 }

//2-Permite clonar objetos y matrices
const array = [1,2,3,4];
const clonedArray = [...array];
console.log(clonedArray); //salida --> [ 1, 2, 3, 4 ]
console.log(array); //salida --> [ 1, 2, 3, 4 ]

const objeto = {a:1, b:2};
const clonedObjeto = {...objeto}; //salida --> { a: 1, b: 2 }
console.log(clonedObjeto); //salida --> { a: 1, b: 2 }

//3-Permite pasar argumentos a funciones
const nums = [1,2,3];
const suma = (a,b,c) => {
    console.log((a+b)*c);
}

suma(...nums); //Estamos pasando los elementos del array 'nums' como argumentos individuales (a = 1, b = 2...)
//salida --> 9

//4-Aplicado a la deconstrucción de objetos y recopilación.

const persona = {
    nombre: 'Jon',
    edad: 30,
    ciudad: 'Sopela',
    profesión: 'Programador'
};

// Deconstruimos nuestro objeto 'persona' en nombre y edad, y recopilamos el resto en un objeto llamado 'detalles'.
const {nombre,edad, ...detalles} = persona;

console.log(nombre); //salida --> Jon
console.log(edad); //salida --> 30
console.log(detalles); //salida --> { ciudad: 'Sopela', 'profesión': 'Programador' }

