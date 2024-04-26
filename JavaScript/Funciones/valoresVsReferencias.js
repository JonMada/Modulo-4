//Valores --> pasamos una copia de esa variable a la función, por lo que se mantiene el original

function duplicador (número) {
    número = número * 2;
    console.log(número);
}

var x = 5;
duplicador(x); //Salida: 10
console.log(x); //Salida: 5 --> mantiene el valor de la variable 'x'

//Objetos --> modifica el valor original de la variable cuando pasa a través de la función

function modificador (objeto) {
    objeto.nombre = 'nombreModificado';
}

//Creamos el objeto
var persona = { nombre: 'Jon', edad: 30};

//Aplicamos la función 'modificador' al objeto 'persona'
modificador(persona);

//Vemos cómo es nuestro objeto tras aplicar la función
console.log(persona) //Salida: { nombre: 'nombreModificado', edad: 30 } --> observamos que el original ha sido modificado