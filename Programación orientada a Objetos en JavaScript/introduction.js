//Creamos nuestra clase, con sus propiedas y su método mediante la palabra clave 'class'
class Persona {
    //Creamos la propiedades
    constructor (nombre,edad) { //Constructor es un método especial al que se llama automáticamente cuando creamos una instancia de clase.
        this.nombre = nombre;
        this.edad = edad;
    }
    //Creamos el método
    saludar () {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

//Creamos la instancia
const persona1 = new Persona ('Jon', 30);
console.log(persona1); //Salida --> Instancia de clase Persona con dos propiedades: nombre (Jon) y edad (30).

//Aplicamos propiedades
console.log(persona1.nombre);
console.log(persona1.edad);

//Aplicamos método
persona1.saludar();