/*Son métodos que podemos llamar directamente desde la clase,
sin necesidad de crear un objeto. Se definen a través de la 
palabra clave 'static'.*/

class Calculadora {
    static sumar (a,b) {
        console.log(a + b);
    }
}

//Llamamos al método estático sin necesidad de crear una instancia de clase

Calculadora.sumar(3,4); //salida --> 7


//Ejemplo desarrollado

class Profesor {
    constructor ({nombre, rol = 'asistente'}) { //Por defecto el valor de rol es 'asistente'
        this.nombre = nombre;
        this.rol = rol;
    }

    static puedeEnseñar (profesor) {
        return (profesor.rol === 'aula'); //Si el rol del objeto de la instancia profesor es igual a 'aula' devuelve true, sino false
    }
}

//Creamos nuestro objeto de la clase profesor
const profesor1 = new Profesor({nombre: 'Jon' });

//Utilizamos nuestro método estático

console.log(`
${profesor1.nombre} puede enseñar: ${Profesor.puedeEnseñar(profesor1)}
`); 

//salida --> Jon puede enseñar: false