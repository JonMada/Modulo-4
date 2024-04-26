//Ejemplo básico
function crearContador () {
    var cuenta = 0

    return function () {
        cuenta = cuenta + 1;
        console.log('Cuenta: ', cuenta);
    };
}

//Asignamos la función crearContador a otra función llamada 'contador'
var contador = crearContador();

//Utilizamos nuestra función
contador(); // Salida --> Cuenta: 1
contador(); // Salida --> Cuenta: 2
contador(); // Salida --> Cuenta: 3
contador(); // Salida --> Cuenta: 4



//Ejemplo avanzado!!!
function golesPromedio() {
    var goles = 15;
    var partidos = 38;

    return { //las funciones dentro de un objeto en JS se denominan métodos
        getActualGolesPromedio : function () {
            return (goles/partidos);
        },
        updatedGolesPromedio : function (gol, partido) {
            goles += gol;
            partidos += partido;
        }
    }
}

//Creamos la instancia
var williams = golesPromedio();

//Podemos llamar a las funciones como un atriuto del objeto
console.log(williams.getActualGolesPromedio()); //Salida --> 0.3947 goles/partido

//Hacemos otra llamada a otro método en el que actualizamos los datos (5 goles en 3 partidos)
williams.updatedGolesPromedio(5,3);

//Llamamos de nuevo al promedio
console.log(williams.getActualGolesPromedio()); //Salida --> 0.4878

