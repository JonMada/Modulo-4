//Variable de alcance global
var globalVariable = 'Soy global';

function miFuncion () {
    return globalVariable; //Puedo acceder a ella
}

var miVariable = miFuncion();
console.log(miVariable); //Salida: 'Soy global'

//Variable de alcance local
function miFuncionTwo () {
    let variableLocal = 'Soy local';
    return variableLocal;
}

var local = miFuncionTwo();
console.log(local); //Salida: Soy local

//Si intentamos llamar a la variable local desde fuera, nos devolverá error
console.log(variableLocal); //Salida --> ReferenceError: variableLocal is not defined