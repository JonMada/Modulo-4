//Creamos nuestras dos promesas
const saludo = new Promise ((resolve,reject) => {
    resolve('Hola');
    reject('Saludo erróneo');
});

const actualizacionesCuenta = new Promise ((resolve,reject) => {
    resolve('Actualización en curso');
    reject('Error en la actualización');
});

//Juntamos nuestas dos promesas en una nueva variable mediante 'Promise.all()'.
const actividadesAcceso = Promise.all([saludo,actualizacionesCuenta]);

//Creamos el then (en este caso no va a dar error) 
actividadesAcceso.then ((respuesta) => { //Respuesta representa los valores de 'resolve' de ambas promesas al estar agrupadas por Promise.all()
    respuesta.forEach(actividad => { //Generamos un loop en el array que contiene nuestras respuestas (['Hola', 'Actualización en curso..']) y cada item del array se denomina actividad
        console.log(actividad); 
    })
})



