//Ejemplo básico de función sin argumentos
function saludo () {
    console.log('Hola. ¿Qué tal?')
}

//Lamamos a la función
saludo() //Salida: Hola. ¿Qué tal?

//Otro ejemplo con return (nos devuelve el valor de la función)
function saludoDos () {
    return 'Hola. ¿Cómo estás?';
}

//Almacenamos el valor de retorno en una variable
let hola = saludoDos();
console.log(hola); //Salida: Hola. ¿Cómo estás?
