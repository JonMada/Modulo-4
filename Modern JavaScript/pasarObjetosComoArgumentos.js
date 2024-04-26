//Las llaves en los argumentos d ela función nos permite extraer automáticamente las propiedades de un objeto
//Creamos nuestros objetos
const persona = {
    nombre : 'Jon',
    edad : 30,
    ciudad: 'Sopela'
};

const personaTwo = {
    nombre : 'Valeria',
    edad : 29,
    ciudad: 'Sopela'
};

//Creamos nuestra función
const displayInfo = ({nombre, edad, ciudad}) => {
    console.log (`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);
}

//Comprobamos nuestra función
displayInfo(persona); //salida --> Nombre: Jon, Edad: 30, Ciudad: Sopela
displayInfo(personaTwo); //salida --> Nombre: Valeria, Edad: 29, Ciudad: Sopela
