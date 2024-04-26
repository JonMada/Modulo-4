// Las variables constantes no pueden ser reasignadas y deben tener un valor asignado en su declaración.
const edad = 19;
// const nombre; --> salida: SyntaxError: Missing initializer in const declaration
// edad = 29; //salida --> TypeError: Assignment to constant variable.

//Las variables constantes sólo estarán disponibles dentro del bloque donde se delcaran.
if (true) {
    const nombreOne = 'Jon';
    console.log(nombreOne);
} //salida --> Jon

// console.log(nombreOne); //salida --> ReferenceError: nombreOne is not defined

//Las variables constantes de tipo permutables no impide los cambios (objetos y arrays)
const persona = {
    nombre: 'Valeria',
    edad: 29,
}

persona.edad = 30; //Aplicamos un cambio en el valor de la clave edad del objeto persona

//Comprobamos si se aplica el cambio
console.log(persona); //salida --> { nombre: 'Valeria', edad: 30 }

