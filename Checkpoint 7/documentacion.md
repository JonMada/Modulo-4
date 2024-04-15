# 1. ¿Qué diferencia a JavaScript de cualquier otro lenguaje de programación?

JavaScript es especial porque puede ejecutarse directamente en un navegador web, permitiendo que las páginas web sean interactivas y dinámicas; mientras que otros lenguajes de programación a menudo necesitan ser preparados/procesados antes de ejecutarse.

Esto significa que los desarrolladores y las desarrolladoras pueden escribir código JavaScript directamente en sus sitios web y ver los resultados inmediatamente. Por ejemplo, pueden crear formularios que respondan a la entrada del usuario, animaciones que se activan al hacer clic en un botón y un largo etcétera.

Además, JavaScript es extensamente conocido por su capacidad para trabajar con eventos. Es decir, tiene la capacidad de detectar cuándo ocurre algo en la página web, como hacer clic en un enlace o subir un archivo, y luego ejecutar código en respuesta a ese evento.

# 2. ¿Cuáles son algunos tipos de datos JS?

## 2.1. Número
Representa valores numéricos, pudiendo ser tanto enteros como decimales.

```JavaScript
var edad = 30;
var precio = 19.99;
```
    
## 2.2.String
Representa cadenas de caracteres, es decir, texto.

```JavaScript
var nombre = 'Jon';
var frase = 'Hola, Valeria';
```

## 2.3.Booleano
Representa un valor lógico verdadero o falso
 ```JavaScript
var isTrue = true;
var isFalse = false;
```

## 2.4.Undefined
Representa un valor no definido
```JavaScript
var x;
console.log(x); //Salida --> Undefined
```

## 2.5.Null
Representa la ausencia intencionada de cualquier valor. Se suele utilizar cando se espera un valor, pero dicho valor no está disponible o no existe.
 ```JavaScript
var localización = null;
var telefono = null;
```

## 2.6.Symbol
Representa un identificador único que se puede utilizar como clave de propiedad de un objeto. Cada valor 'symbol' es único e inmutable.
```JavaScript
var simbolo = Symbol('Este es un símbolo único');
console.log(simbolo); //Salida --> Symbol(Este es un símbolo único)
```

# 3. ¿Cuáles son las tres funciones de String en JS?
En JavaScript existen diversidad de funciones aplicables a datos de tipo string. A continuación, se presentarán tres que cuentan con una relevancia significativa.

## 3.1. Propiedad 'length'
Esta propiedad es aplicable a strings y matrices, y nos indica la cantidad de elementos o caracteres existentes.
```JavaScript
var texto = 'Hola. ¿Qué tal estás?';
console.log(texto.length); //Salida --> 21 (representa el nº de caracteres que componen la string contenida en la variable 'texto')
```
## 3.2. Método 'charAt()'
Se utiliza para obtener el caracter de una posición específica dentro de una cadena de texto. Toma un índice como argumento y devuelve el caracter que se encuentra en dicha posición.
```JavaScript
var texto = 'Hola. ¿Qué tal estás?';
console.log(texto.charAt(1)); //Salida --> 'o'
```

## 3.3. Método 'concat()'
Se utiliza para unir dos o más cadenas de texto y devuelve una nueva cadena que contiene la unión de las strings originales.
```JavaScript
var str1 = 'Hola';
var str2 = ' gente';
var unionStrings = str1.concat(str2);
console.log(unionStrings); //Salida --> Hola gente
```

# 4. ¿Qué es un condicional?
* Los condicionales en JavaScript se utilizan para ejecutar código dependiendo de si una condición es verdadera o falsa. 
* Los condicionales más comunes son:
  * __if__: se utiliza como expresión del primer condicional.
  * __else if__: se utiliza para introducir un condicional adicional después del 'if'. Se pueden introducir tantos bloques 'else if' como se desee.
  * __else__: este bloque se ejecuta si ninguna de las condiciones anteriores se cumple.

## 4.1. Ejemplo aplicado
```JavaScript
//Creamos la variable 
var edad = 66;

//Creamos el condicional
if (edad >= 25 && edad <= 65) { //Si edad es mayor o igual a 25 y menor o igual a 65.
    console.log('Puede alquilar el coche');
} else if (edad < 25) {
    console.log('No tiene edad suficiente para realizar el alquiler');
} else {
    console.log('Se le realizará un psicotécnico antes del alquiler');
}

//Salida --> Se le realizará un psicotécnico antes del alquiler
```

# 5. ¿Qué es un operador ternario?
Los operadores ternarios son una forma concisa de escribir una declaración 'if...else', es decir, un condicional, en una sola línea. Al usar este tipo de operadores para la evaluación de condicionales, nos permite reducir la cantidad de código, haciéndolo más claro de entender.

## 5.1. Ejemplo aplicado (transformando ejemplo anterior a operador ternario)
```JavaScript
//Creamos la variable
var edad = 66;

//Creamos nuestro operador ternario
let respuesta = edad >= 25 && edad <= 65? 'Puede alquilar el coche': edad > 65?  'Se le realizará un psicotécnico antes del alquiler': 'No tiene edad suficiente para realizar el alquiler';

//Comprobamos
console.log(respuesta) //Salida --> Se le realizará un psicotécnico antes del alquiler
```

# 6. ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

## 6.1. Declaraciones
* Las declaraciones se realizan mediante la palabra clave 'function' seguida del nombre de la función, para posteriormente indicar los parámetros y el cuerpo de la misma.
* Pueden ser llamadas antes de que se declaren en el código debido al comportamiento de hoisting de JS.
  
```JavaScript
function suma(a,b) {
    return a + b;
}
```
## 6.2. Expresiones
* Las expresiones se asignan a una variable utilizando la sintaxis clásisca de asignación de JS (' = '), donde la variable contendrá la función.
* A diferencia de las declaraciones, las expresiones no se ven afectadas por el hoisting y deben ser definidas antes de ser utilizadas.

```JavaScript
var suma = function(a,b) {
    return a + b;
};
```

# 7. ¿Qué es la palabra clave "this" en JS?
Refiriendonos a una función la palabra clave 'this' se refiere al objeto que invoca la función a la que estamos llamando.

## 7.1 Ejemplo aplicado
```JavaScript
//Definimos un objeto llamado 'persona'
var persona = {
    nombre : 'Jon',
    saludar: function () {
        console.log('Hola, soy ' + this.nombre + '.');
    }
};
//Llamamos al método saludar del objeto persona
persona.saludar(); //Salida --> Hola, soy Juan.
```

'This' se refiere al objeto en el se está ejecutando el método 'saludar()', es decir, 'persona'. Por tanto, 'this.nombre' hace referencia a la propiedad 'nombre' del objeto 'persona', el cual es igual a 'Jon'.
