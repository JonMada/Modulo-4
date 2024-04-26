// Creamos nuestra variable de trabajo para aplicar las funciones
var str = 'The quick brown fox jumped over the lazy dog';

// Atributo length: nos devuelve la longitud de una matriz o cadena de texto
console.log(str.length) // Salida: 44 --> son los caracteres que componen la variable 'str'.

// Método 'charAt()': nos devuelve el carácter que se encuentra en una determinada posición.
console.log(str.charAt(0)) // Salida: T --> es el primer carácter de la cadena que representa 'str'.

// Método 'concat()': une dos o más cadenas de texto.
var str1 = 'Hola';
var str2 = ' mundo';
var str3 = '!';
var str4 = str1.concat(str2, str3);
console.log(str4); //Salida: Hola mundo! 

// Método 'includes()': nos permite comprobar si existe o no una cadena de texto dentro d enuestra string
console.log(str.includes('quick')); // Salida: true --> indica que sí la contiene
console.log(str.includes('jon')); //Salida: false --> indica que no la contiene

// Método 'startsWith()': nos permite comprobar si nuestra cadena de texto comienza con una cadena de texto dada
console.log(str.startsWith('dog')); //Salida: false --> indica que 'str' no empieza por 'dog'

// Método 'endsWith()': nos permite comprobar si nuestra cadena de texto termina con una cadena de texto dada
console.log(str.endsWith('dog')); //Salida: true --> indica que 'str' termina con 'dog'

// Método 'repeat()': nos permite repetir un número determinado de veces un cadena de texto
console.log(str.repeat(2)); // Salida: The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog

// Método 'match()': se utiliza para buscar una cadena de texto dentro de la vadena de texto
console.log(str.match(/lazy/)); 

/*Salida:
[
  'lazy',
  index: 36,
  input: 'The quick brown fox jumped over the lazy dog',
  groups: undefined
]

Indica el elemento de búsqueda, el índice en el que comienza
el elemento de búsqueda dentro del string, y el input */

// Método 'replace()': se utiliza para reemplazar una cadena de texto por otra
console.log(str.replace('dog', 'cat')); // Salida: The quick brown fox jumped over the lazy cat

// Método 'search()': busca a través de una expresión regular la coincidencia con una cadena de texto dada
var string2 = 'La casa es grande y la casa es roja'; 
console.log(string2.search(/casa/)); //Salida: 3 --> devuelve la posición del primer carácter de la primera coincidencia

// Método 'indexOf()': devuelve la posición de la primera aparición de la subcadena dada
console.log(string2.indexOf('casa')); //Salida: 3 --> devuelve la posición del primer carácter

// Método 'lastIndexOf()': devuelve la posición de la última aparición de la subcadena dada
console.log(string2.lastIndexOf('casa')); //Salida: 23 --> devuelve la posición del primer carácter 

// Método 'slice()': extrae una porción de la cadena
console.log(string2.slice(0,10)); //Salida: 'La casa es'
console.log(string2.slice(-4)); //Salida: 'roja'

// Método 'trim()': elimina los espacios en blanco tanto al prinicipio como al final de la cadena
var strEspacios = '    Hola. ¿Qué tal?        ';
var strSinEspacios = strEspacios.trim();
console.log(strSinEspacios); //Salida: 'Hola.¿Qué tal?'

//Son combinables los métodos:
console.log(string2.slice(0,11).trim()); //Salida:'La casa es'

// Método 'toUpperCase()':
console.log(string2.toUpperCase()); //Salida: 'LA CASA ES GRANDE Y LA CASA ES ROJA'

// Método 'toLowerCase()':
console.log(string2.toLowerCase()); //Salida: 'la casa es grande y la casa es roja'