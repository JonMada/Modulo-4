//Estructura básica de una promesa
let miPromesa = new Promise ((resolve,reject) => {
    let pudisteAyudar = false;

    if(pudisteAyudar) {
        resolve('Pude ayudarte')
    } else {
        reject(Error('No pude ayudarte')) //Se utiliza para lanzar mensajes de error
    }
});

//Utilizamos nuestra promesa
miPromesa.then((mensaje) => { //Si la promesa es true, se ejecutará el then y mensaje será el valor contenido en resolve
    console.log(mensaje);
}).catch((error) => { //Si la promesa es false, se ejecutará el catch y error será el valor contenido en reject
    console.error(error)
});
