//La función bind permite establecer el contexto correcto para aplicar una función a un objeto
//Imaginemos que tenemos una función de saludo
const saludo = function () {
    console.log(`Hola, ${this.nombre}`);
}

//Creamos nuestro objeto con la propiedad 'nombre'
const persona = {
    nombre: 'Jon'
};

//Tratamos de aplicar la función saludo a nuestro objeto persona
saludo(persona); //salida --> Hola, undefined

//La salida es undefined porque 'this.nombre' no está en el contexto del objeto al que no referimos.
//Para solucionar esto, utilizamos la función 'bind()'
const saludoJon = saludo.bind(persona);

//Probamos nuestra nueva función
saludoJon(); //salida --> Hola, Jon

