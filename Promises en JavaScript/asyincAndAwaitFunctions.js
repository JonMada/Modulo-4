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

async function actividadesLogin () {
    const returnedLogin = await login(); //Esto hace que no ocurra nada más hasta que la función 'login()' sea completada.
    console.log(returnedLogin);

    const returnedActualizarCuenta = await actualizarCuenta();
    console.log(returnedActualizarCuenta);
}

actividadesLogin();