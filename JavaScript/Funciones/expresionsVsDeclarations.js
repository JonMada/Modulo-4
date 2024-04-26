// Declaración de una función
function suma (a,b) {
    return a + b;
}

console.log(suma(9,5)); // Salida --> 14

// Expresión de una función
var resta = function (a,b) {
    return a - b;
}

console.log(resta(5,4)); //Salida --> 1

// La utilidad de las expresiones reside en que, no se deben realizar declaraciones dentro de bloques if, for...

/* ERRÓNEO
if (true) {
    function declaracion () {
        console.log ('Esto es una expresión');
    }
} */ 

// CORRECTO
if (true) {
    var declaration = function() {
        console.log ('Esto es una declaración');
    };
} 

