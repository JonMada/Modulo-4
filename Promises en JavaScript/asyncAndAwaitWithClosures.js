/*Imaginemos que queremos mantener el flujo de resolución de los procesos
de nuestro programa, pero en vez de tener que esperar a que se cargue uno por uno
en nuestra consola, queremos que todos ellos aparezcan a la vez en nuestra consola*/

const login = () => {
    return new Promise ((resolve) => { //Ejemplo simplificado sin reject
        setTimeout(()=>{
            resolve('Usuario logeandose...');
        }, 4000); //Da igual que tarde 4 segundos este proceso y el segundo 2, con el async y await podemos definir el flujo de trabajo
    });
};

const actualizarCuenta = () => {
    return new Promise ((resolve) => { //Ejemplo simplificado sin reject
        setTimeout(()=>{
            resolve('Actualizando cuenta de usuario...');
        }, 2000);
    });
};

/*En este ejemplo, necesitamos que las funciones se ejecuten de manera secuencial,
si por algún caso se actualizase la cuenta antes del evento 'login' esto no llevaría
a un error. Queremos saber si el usuario se ha loggeado correctamente, para posteriormente
actualizar su cuenta */

async function actividadesLogin (login, actualizarCuenta) { //El nombre del argumento es arbitrario, simplemente representa la promesa que es devuelta por la función que es llamada en la posición de ese argumento.
    const returnedLogin = await login; //Esto hace que no ocurra nada más hasta que la función 'login()' sea completada.
    console.log(returnedLogin);

    const returnedActualizarCuenta = await actualizarCuenta;
    console.log(returnedActualizarCuenta);
}

actividadesLogin(login(),actualizarCuenta());
/*En este caso, ponemos como primer argumento la función 'login()' la cual devuelve una promesa, con un valor:
'Actualizando cuenta de usuario...' que se almacenará en la variable 'returnedLogin' la cuál solo tiene alcance
dentro de la función, es decir, no puede ser llamada desde fuera */