//Aplicación del loop 'for in' a objetos en JS

let persona = {
    nombre: 'Jon',
    edad: 30,
    ciudad: 'Sopela'
}

for (propiedad in persona) {
    console.log(propiedad + ' --> ' + persona[propiedad]);
}