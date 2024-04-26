//Definimos la función con dos argumentos/parámetros
function fullName (nombre, apellido) {
    return apellido.toUpperCase() + ', ' + nombre.toUpperCase();
}

//Llamamos a la función
console.log(fullName('Jon', 'Madariaga'));

//Creación de argumentos por defecto de la función
function nombreCompleto (name, lastname, idioma) {
    var idioma = idioma || 'Castellano'; //Si idioma está definido = a idioma, sino 'Castellano'
    return lastname.toUpperCase() + ', ' + name.toUpperCase() + ' - ' + idioma
}

console.log(nombreCompleto('Valeria', 'Vallejo')); 