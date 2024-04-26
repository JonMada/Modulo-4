// Nos permite expresar condicionales de manera más concisa:

// function ageVerification(age) {
//     if (age > 25) {
//         console.log('Puedes alquilar el coche');
//     } else {
//         console.log('No puedes alquilar el coche');
//     }
// }

//Representando lo mismo con un operador ternario
function ageVerification (age) {
    let answer = age > 25 ? 'Puedes alquilar el coche' : 'No puedes alquilar el coche';
    console.log(answer);
}

//Aplicamos la función
ageVerification(30);


//Ejemplo más avanzado
function controlAdmin (user) {
    if (user) { // Si el objeto no está vacio '{}' o = null, la condición se cumplirá ya que el objeto no está vacio.
        if (user.admin) {
            console.log('Desplegar herramientas de administrador')
        } else {
            console.log('Necesitas ser administrador')
        }
    
    } else {
        console.log('Necesitas registrarte')
    }
}

//Equivalencia condicional con operador ternario

function controlAdminTwo (user) {
    let respueta = user ? user.admin ? 'Desplegar herramientas de administrador' : 
    'Necesitas ser administrador': 'Necesitas registrarte';
    console.log(respueta)
}


//Creamos los objetos (usuarios)

let userOne = {
    name : 'Jon',
    admin : true,
}

let userTwo = {
    name : 'Valeria',
    admin : false
}

let userThree = null

//Aplicamos las funciones para ver cómo se comportan

controlAdmin(userOne) //Salida: Desplegar herramientas de administrador
controlAdmin(userTwo) // Salida: Necesitas ser administrador
controlAdmin(userThree) //Salida: Necesitas registrarte

controlAdminTwo(userOne) //Salida: Desplegar herramientas de administrador
controlAdminTwo(userTwo)  // Salida: Necesitas ser administrador
controlAdminTwo(userThree) //Salida: Necesitas registrarte