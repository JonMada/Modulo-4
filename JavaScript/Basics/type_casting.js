// Transformando a número entero --> 'parseInt()'
var floatNum = 3.8;
var intNum = parseInt(floatNum);
console.log(intNum); // Salida --> 3

// Transformando a número décimal --> 'parseFloat()'
var stringNum = '3.9';
var floatString = parseFloat(stringNum);
console.log(floatString); // Salida --> 3.9

// Transformando a string --> 'String()'
var num = 2.392;
var string = String(num);
console.log(string); // Salida --> '2.392'

// Tranformando a número --> 'Number()'
var suma = Number('199') + parseInt(1)
console.log(suma) // Salida --> 200

// Transformando a string --> 'toString()'
var sumaStr = suma.toString();
console.log(sumaStr); // Salida --> '200'

//Ejemplo aplicados:
var numTrue = Number(true)
console.log(numTrue); // Salida --> 1

var stringTlf = '493992993 es mi número de teléfono';
var tlf = parseInt(stringTlf);
console.log(tlf); /// Salida --> 493992993