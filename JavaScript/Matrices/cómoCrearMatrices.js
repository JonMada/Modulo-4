//Los arrays permiten combinar diversidad de data types
var arrayConDatosCombinados = [1,'a', [1,2,3], {nombre:'Jon'}, function saludo () {console.log('Hola');}]

//¿Cómo se extraen elementos de una matriz?
var miMatriz = ['Jon','Valeria','Ane'];
console.log(miMatriz[0]) //Salida --> Jon

//¿Cómo se extraen elementos anidados en una matriz?
var matrizCombinada = [1,'a',[1,2,3]];

/*Imaginemos que queremos extraer de la matriz anidada
el segundo elemento, la sintaxis sería la siguiente: */
var segundoElementoMatrizAnidada = matrizCombinada[2][1];
console.log(segundoElementoMatrizAnidada); //Salida --> 2

//¿Cómo extraer objetos de una matriz?
var matrizConObjeto = [1,2,3,4, {nombre:'Valeria'},3,4];
var objetoMatriz = matrizConObjeto[4];
console.log(objetoMatriz); //Salida --> { nombre: 'Valeria' }

var nombreCompleto = matrizConObjeto [4].nombre;
console.log(nombreCompleto); //Salida --> Valeria

//¿Cómo extraer una función de una matriz?
var matrizConFuncion = [1,2,3,function saludo(){console.log('Hola');}];
var miFuncion = matrizConFuncion[3];
miFuncion(); //Salida --> 'Hola'