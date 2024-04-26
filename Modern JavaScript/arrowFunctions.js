// La estructura básica de una función de flecha aplicada es la siguiente:
const suma = (a,b) => {
    const resultado = a + b;
    return resultado;
}

console.log(suma(1,2)); //salida --> 3

//Otro ejemplo:
const nombreCompleto = (nombre, apellido) => {
    console.log(`Hola ${nombre} ${apellido}`);
};

nombreCompleto('Jon','Madariaga'); //salida --> Hola Jon Madariaga