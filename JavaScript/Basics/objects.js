// Creamos un objeto con elementos anidados

var estudiante = {
    nombre: 'Jon',
    edad: 30,
    ciudad: 'Sopela',
    notas: {
        maths : {
            parciales: 7.9,
            global: 6
        },
        ingles : {
            parciales: 7,
            global: 4
        }
    }
};

// Si queremos acceder al nombre del objeto
console.log(estudiante.nombre);

// Si queremos acceder a la nota de los parciales de maths
console.log(estudiante.notas.maths.parciales);

// Si queremos añadir una nueva asignatura y su nota
estudiante.notas.religion = 8;
console.log(estudiante.notas.religion)

// Si queremos modificar una de las notas existentes
estudiante.notas.ingles.global = 1;
console.log(estudiante.notas.ingles.global)